---
id: funcionamento
title: Códigos de Teste
sidebar_label: Testes de Funcionamento
---

Os trechos de código abaixo servem para testar os módulos presentes no EPS e CDHS. Eles foram utilizados durante a validação das placas-protótipo e servem para identificar o funcionamento correto dos sensores. Os pinos já estão de acordo com os utilizados pelo teensy no CDHS.

Mais informação sobre os testes de integração [aqui](/docs/aurorav2/hardware/placas/integracao/epscdhs).

:::tip Observação
Cada trecho abaixo inicia o monitor serial numa taxa diferente. Lembre-se de fazer o ajuste necessário em platformio.ini:

```cpp
; PlatformIO Project Configuration File

[env:teensy35]
platform = teensy
board = teensy35
framework = arduino
lib_deps = //Suas libs
monitor_speed = 9600 //Mudar aqui
```
:::

## I2C Scanner
```cpp
// I2C Scanner
// Data: 27/01/21
// O propósito desse código é identificar 
// os dispositivos I2C conectados ao 
// microcontrolador e printar seus endereços;

#include <Arduino.h>
#include <Wire.h>

void setup()
{
    Wire.begin();

    Serial.begin(9600);
    while (!Serial); 
    Serial.println("\nI2C Scanner");
}

void loop()
{
    byte error, address;
    int nDevices;

    Serial.println("Scanning...");

    nDevices = 0;
    for (address = 1; address < 127; address++)
    {
        // The i2c_scanner uses the return value of
        // the Write.endTransmisstion to see if
        // a device did acknowledge to the address.
        Wire.beginTransmission(address);
        error = Wire.endTransmission();

        if (error == 0)
        {
            Serial.print("I2C device found at address 0x");
            if (address < 16)
                Serial.print("0");
            Serial.print(address, HEX);
            Serial.println("  !");

            nDevices++;
        }
        else if (error == 4)
        {
            Serial.print("Unknown error at address 0x");
            if (address < 16)
                Serial.print("0");
            Serial.println(address, HEX);
        }
    }
    if (nDevices == 0)
        Serial.println("No I2C devices found\n");
    else
        Serial.println("done\n");

    delay(5000); // wait 5 seconds for next scan
}
```

## INA219
```cpp
// INA219
// Leitura de tensão, corrente e potência 
// Data: 27/01/21
// Libs: Adafruit INA219, Adafruit Sensor

#include <Arduino.h>
#include <Adafruit_Sensor.h>
#include <Wire.h>
#include <Adafruit_INA219.h>

Adafruit_INA219 ina219;

void setup(void)
{
    Serial.begin(115200);
    while (!Serial)
    {
        // will pause Zero, Leonardo, etc until serial console opens
        delay(1);
    }

    uint32_t currentFrequency;

    Serial.println("Hello!");

    // Initialize the INA219.
    // By default the initialization will use the largest range (32V, 2A).  However
    // you can call a setCalibration function to change this range (see comments).
    if (!ina219.begin())
    {
        Serial.println("Failed to find INA219 chip");
        while (1)
        {
            delay(10);
        }
    }
    // To use a slightly lower 32V, 1A range (higher precision on amps):
    //ina219.setCalibration_32V_1A();
    // Or to use a lower 16V, 400mA range (higher precision on volts and amps):
    //ina219.setCalibration_16V_400mA();

    Serial.println("Measuring voltage and current with INA219 ...");
}

void loop(void)
{
    float shuntvoltage = 0;
    float busvoltage = 0;
    float current_mA = 0;
    float loadvoltage = 0;
    float power_mW = 0;

    shuntvoltage = ina219.getShuntVoltage_mV();
    busvoltage = ina219.getBusVoltage_V();
    current_mA = ina219.getCurrent_mA();
    power_mW = ina219.getPower_mW();
    loadvoltage = busvoltage + (shuntvoltage / 1000);

    Serial.print("Bus Voltage:   ");
    Serial.print(busvoltage);
    Serial.println(" V");
    Serial.print("Shunt Voltage: ");
    Serial.print(shuntvoltage);
    Serial.println(" mV");
    Serial.print("Load Voltage:  ");
    Serial.print(loadvoltage);
    Serial.println(" V");
    Serial.print("Current:       ");
    Serial.print(current_mA);
    Serial.println(" mA");
    Serial.print("Power:         ");
    Serial.print(power_mW);
    Serial.println(" mW");
    Serial.println("");

    delay(2000);
}
```

## GY-91
### BMP280
```cpp
// BMP280
// Leitura de temperatura, pressão e altitude.
// Data: 27/01/21
// Libs: Adafruit BMP280
// Observação: Lembrar de mudar o parâmetro de bmp.readAltitude()
// de acordo com a pressão do nível do mar local.

#include <Arduino.h>
#include <Wire.h>
#include <SPI.h>
#include <Adafruit_BMP280.h>

Adafruit_BMP280 bmp; // I2C

void setup()
{
    Serial.begin(9600);
    Serial.println(F("BMP280 test"));

    if (!bmp.begin())
    {
        Serial.println(F("Could not find a valid BMP280 sensor, check wiring!"));
        while (1);
    }

    /* Default settings from datasheet. */
    bmp.setSampling(Adafruit_BMP280::MODE_NORMAL,     /* Operating Mode. */
                    Adafruit_BMP280::SAMPLING_X2,     /* Temp. oversampling */
                    Adafruit_BMP280::SAMPLING_X16,    /* Pressure oversampling */
                    Adafruit_BMP280::FILTER_X16,      /* Filtering. */
                    Adafruit_BMP280::STANDBY_MS_500); /* Standby time. */
}

void loop()
{
    Serial.print(F("Temperature = "));
    Serial.print(bmp.readTemperature());
    Serial.println(" *C");

    Serial.print(F("Pressure = "));
    Serial.print(bmp.readPressure());
    Serial.println(" Pa");

    Serial.print(F("Approx altitude = "));
    Serial.print(bmp.readAltitude(1013.25)); /* Adjusted to local forecast! */
    Serial.println(" m");

    Serial.println();
    delay(2000);
}
```

### MPU-9250
```cpp
// MPU-9250
// Leitura do acelerômetro, giroscópio, magnetômetro e temperatura 
// Data: 27/01/21
// Libs: MPU9250

#include <Arduino.h>
#include "MPU9250.h"

// an MPU9250 object with the MPU-9250 sensor on I2C bus 0 with address 0x68
MPU9250 IMU(Wire, 0x68);
int status;

void setup()
{
    // serial to display data
    Serial.begin(115200);
    while (!Serial){}

    // start communication with IMU
    status = IMU.begin();
    if (status < 0)
    {
        Serial.println("IMU initialization unsuccessful");
        Serial.println("Check IMU wiring or try cycling power");
        Serial.print("Status: ");
        Serial.println(status);
        while (1)
        {
        }
    }
}

void loop()
{
    // read the sensor
    IMU.readSensor();
    // display the data
    Serial.print(IMU.getAccelX_mss(), 6);
    Serial.print("\t");
    Serial.print(IMU.getAccelY_mss(), 6);
    Serial.print("\t");
    Serial.print(IMU.getAccelZ_mss(), 6);
    Serial.print("\t");
    Serial.print(IMU.getGyroX_rads(), 6);
    Serial.print("\t");
    Serial.print(IMU.getGyroY_rads(), 6);
    Serial.print("\t");
    Serial.print(IMU.getGyroZ_rads(), 6);
    Serial.print("\t");
    Serial.print(IMU.getMagX_uT(), 6);
    Serial.print("\t");
    Serial.print(IMU.getMagY_uT(), 6);
    Serial.print("\t");
    Serial.print(IMU.getMagZ_uT(), 6);
    Serial.print("\t");
    Serial.print(IMU.getTemperature_C(), 6);
    Serial.print("\n");
    delay(100);
}
```

## BMP388
```cpp
// BMP388
// Leitura de temperatura, pressão e altitude.
// Data: 27/01/21
// Libs: Adafruit BMP3XX, Adafruit Sensor
// Observação: Ajustar SEALEVELPRESSURE_HPA de acordo
// com a pressão do nível do mar local.

#include <Arduino.h>
#include <Wire.h>
#include <Adafruit_Sensor.h>
#include "Adafruit_BMP3XX.h"

#define SEALEVELPRESSURE_HPA (1013.25)

Adafruit_BMP3XX bmp;

void setup()
{
    Serial.begin(9600);
    while (!Serial);
    Serial.println("Adafruit BMP388 / BMP390 test");

    if (!bmp.begin_I2C()) // hardware I2C mode, can pass in address & alt Wire
    { 
        Serial.println("Could not find a valid BMP3 sensor, check wiring!");
        while (1);
    }

    // Set up oversampling and filter initialization
    bmp.setTemperatureOversampling(BMP3_OVERSAMPLING_8X);
    bmp.setPressureOversampling(BMP3_OVERSAMPLING_4X);
    bmp.setIIRFilterCoeff(BMP3_IIR_FILTER_COEFF_3);
    bmp.setOutputDataRate(BMP3_ODR_50_HZ);
}

void loop()
{
    if (!bmp.performReading())
    {
        Serial.println("Failed to perform reading :(");
        return;
    }
    Serial.print("Temperature = ");
    Serial.print(bmp.temperature);
    Serial.println(" *C");

    Serial.print("Pressure = ");
    Serial.print(bmp.pressure / 100.0);
    Serial.println(" hPa");

    Serial.print("Approx. Altitude = ");
    Serial.print(bmp.readAltitude(SEALEVELPRESSURE_HPA));
    Serial.println(" m");

    Serial.println();
    delay(2000);
}
```

## LoRa RFM95W
### Transmitter
```cpp
// LoRa RFM95 Transmitter Test
// Data: 27/01/21
// Libs: RadioHead v1.113
// O objetivo deste código é programar o LoRa para
// enviar um pacote, esperar e acusar o recebimento
// da mensagem devolvida pelo outro LoRa.
// O RSSI (Received Signal Strength Indication), indicador
// de intensidade do sinal recebido, é printado.

#include <Arduino.h>
#include <SPI.h>
#include <RH_RF95.h>

// Singleton instance of the radio driver
RH_RF95 rf95(24, 26); // (CS, INT)

void setup()
{
    Serial.begin(9600);
    while (!Serial); // Wait for serial port to be available
    if (!rf95.init())
        Serial.println("init failed");
    rf95.setFrequency(915.0);
    // Defaults after init are 434.0MHz, 13dBm, Bw = 125 kHz, Cr = 4/5, Sf = 128chips/symbol, CRC on

    // You can change the modulation parameters with eg
    // rf95.setModemConfig(RH_RF95::Bw500Cr45Sf128);

    // The default transmitter power is 13dBm, using PA_BOOST.
    // If you are using RFM95/96/97/98 modules which uses the PA_BOOST transmitter pin, then
    // you can set transmitter powers from 2 to 20 dBm:
    rf95.setTxPower(20, false);
}

void loop()
{
    Serial.println("Sending to rf95_server");
    // Send a message to rf95_server
    uint8_t data[] = "Hello World!";
    rf95.send(data, sizeof(data));

    rf95.waitPacketSent();
    // Now wait for a reply
    uint8_t buf[RH_RF95_MAX_MESSAGE_LEN];
    uint8_t len = sizeof(buf);

    if (rf95.waitAvailableTimeout(3000))
    {
        // Should be a reply message for us now
        if (rf95.recv(buf, &len))
        {
            Serial.print("got reply: ");
            Serial.println((char *)buf);
            Serial.print("RSSI: ");
            Serial.println(rf95.lastRssi(), DEC);
        }
        else
        {
            Serial.println("recv failed");
        }
    }
    else
    {
        Serial.println("No reply, is rf95_server running?");
    }
    delay(400);
}
```

### Receiver
```cpp
// LoRa RFM95 Receiver Test
// Data: 27/01/21
// Libs: RadioHead v1.113
// O objetivo deste código é programar o LoRa para
// fazer o recebimento dos dados enviados e devolver uma mensagem.
// O RSSI (Received Signal Strength Indication), indicador
// de intensidade do sinal recebido, é printado.

#include <Arduino.h>
#include <SPI.h>
#include <RH_RF95.h>

// Singleton instance of the radio driver
// RH_RF95 rf95;
RH_RF95 rf95(24, 26); // (CS, INT)

int led = 13; // Used to blink

void setup()
{
    pinMode(led, OUTPUT);
    Serial.begin(9600);
    while (!Serial); // Wait for serial port to be available
    if (!rf95.init())
        Serial.println("init failed");
    rf95.setFrequency(915.0);
    // Defaults after init are 434.0MHz, 13dBm, Bw = 125 kHz, Cr = 4/5, Sf = 128chips/symbol, CRC on

    // You can change the modulation parameters with eg
    // rf95.setModemConfig(RH_RF95::Bw500Cr45Sf128);

    // The default transmitter power is 13dBm, using PA_BOOST.
    // If you are using RFM95/96/97/98 modules which uses the PA_BOOST transmitter pin, then
    // you can set transmitter powers from 2 to 20 dBm:
    rf95.setTxPower(20, false);
}

void loop()
{
    if (rf95.available())
    {
        // Should be a message for us now
        uint8_t buf[RH_RF95_MAX_MESSAGE_LEN];
        uint8_t len = sizeof(buf);
        if (rf95.recv(buf, &len))
        {
            digitalWrite(led, HIGH);
            //      RH_RF95::printBuffer("request: ", buf, len);
            Serial.print("got request: ");
            Serial.println((char *)buf);
            Serial.print("RSSI: ");
            Serial.println(rf95.lastRssi(), DEC);

            // Send a reply
            uint8_t data[] = "And hello back to you";
            rf95.send(data, sizeof(data));
            rf95.waitPacketSent();
            Serial.println("Sent a reply");
            digitalWrite(led, LOW);
        }
        else
        {
            Serial.println("recv failed");
        }
    }
}
```

## MicroSD Adapter
```cpp
// Adaptador MicroSD
// Teste de escrita no cartão microSD
// Data: 27/01/21
// Libs: SD

#include <Arduino.h>
#include <SPI.h>
#include <SD.h>

File myFile;

void setup()
{
    // Open serial communications and wait for port to open:
    Serial.begin(9600);
    while (!Serial)
    {
        ; // wait for serial port to connect. Needed for native USB port only
    }
    Serial.print("Initializing SD card...");
    if (!SD.begin(27))
    {
        Serial.println("initialization failed!");
        while (1)
            ;
    }
    Serial.println("initialization done.");
    // open the file. note that only one file can be open at a time,
    // so you have to close this one before opening another.
    myFile = SD.open("test.txt", FILE_WRITE);
    // if the file opened okay, write to it:
    if (myFile)
    {
        Serial.print("Writing to test.txt...");
        myFile.println("--- Inicio ---");
        myFile.println("Data: 27/01/21");
        myFile.println("Autor: Minerva Rockets");
        myFile.println("Esse é um teste da escrita no cartão microSD");
        for (int i = 0; i < 20; i++)
        {
            myFile.println(i);
        }
        myFile.println("--- Fim ---");
        // close the file:
        myFile.close();
        Serial.println("done.");
    }
    else
    {
        // if the file didn't open, print an error:
        Serial.println("error opening test.txt");
    }
}
void loop()
{
    // nothing happens after setup
}
```

## MTK3339
```cpp
// MTK-3339
// Printa o que quer que o GPS esteja recebendo.
// Veja o command set para interpretar:
// https://cdn-shop.adafruit.com/datasheets/PMTK_A11.pdf
// Data: 27/01/21
// Libs: Adafruit GPS

#include <Arduino.h>
#include <Adafruit_GPS.h>
#include <SoftwareSerial.h>

SoftwareSerial mySerial(0, 1);

#define PMTK_SET_NMEA_UPDATE_1HZ "$PMTK220,1000*1F"
#define PMTK_SET_NMEA_UPDATE_5HZ "$PMTK220,200*2C"
#define PMTK_SET_NMEA_UPDATE_10HZ "$PMTK220,100*2F"

// turn on only the second sentence (GPRMC)
#define PMTK_SET_NMEA_OUTPUT_RMCONLY "$PMTK314,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0*29"
// turn on GPRMC and GGA
#define PMTK_SET_NMEA_OUTPUT_RMCGGA "$PMTK314,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0*28"
// turn on ALL THE DATA
#define PMTK_SET_NMEA_OUTPUT_ALLDATA "$PMTK314,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0*28"
// turn off output
#define PMTK_SET_NMEA_OUTPUT_OFF "$PMTK314,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0*28"

#define PMTK_Q_RELEASE "$PMTK605*31"

void setup()
{
    while (!Serial)
        ; // wait for Serial to be ready

    Serial.begin(57600); // this baud rate doesn't actually matter!
    mySerial.begin(9600);
    delay(2000);
    Serial.println("Get version!");
    mySerial.println(PMTK_Q_RELEASE);

    // you can send various commands to get it started
    //mySerial.println(PMTK_SET_NMEA_OUTPUT_RMCGGA);
    mySerial.println(PMTK_SET_NMEA_OUTPUT_ALLDATA);

    mySerial.println(PMTK_SET_NMEA_UPDATE_1HZ);
}

void loop()
{
    if (Serial.available())
    {
        char c = Serial.read();
        Serial.write(c);
        mySerial.write(c);
    }
    if (mySerial.available())
    {
        char c = mySerial.read();
        Serial.write(c);
    }
}
```