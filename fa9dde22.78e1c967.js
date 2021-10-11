(window.webpackJsonp=window.webpackJsonp||[]).push([[101],{172:function(n,e,r){"use strict";r.r(e),r.d(e,"frontMatter",(function(){return l})),r.d(e,"metadata",(function(){return s})),r.d(e,"toc",(function(){return d})),r.d(e,"default",(function(){return c}));var i=r(3),t=r(7),a=(r(0),r(179)),o=["components"],l={id:"funcionamento",title:"C\xf3digos de Teste",sidebar_label:"Testes de Funcionamento"},s={unversionedId:"aurorav2/software/testes/funcionamento",id:"aurorav2/software/testes/funcionamento",isDocsHomePage:!1,title:"C\xf3digos de Teste",description:"Os trechos de c\xf3digo abaixo servem para testar os m\xf3dulos presentes no EPS e CDHS. Eles foram utilizados durante a valida\xe7\xe3o das placas-prot\xf3tipo e servem para identificar o funcionamento correto dos sensores. Os pinos j\xe1 est\xe3o de acordo com os utilizados pelo teensy no CDHS.",source:"@site/docs/aurorav2/software/testes/funcionamento.md",slug:"/aurorav2/software/testes/funcionamento",permalink:"/documentation/docs/aurorav2/software/testes/funcionamento",editUrl:"https://github.com/minervarockets/documentation/edit/master/my-website/docs/aurorav2/software/testes/funcionamento.md",version:"current",sidebar_label:"Testes de Funcionamento",sidebar:"Docs",previous:{title:"Barramento",permalink:"/documentation/docs/aurorav2/hardware/barramento"},next:{title:"Teste de Leitura e Escrita do SD",permalink:"/documentation/docs/aurorav2/software/testes/leituraescrita"}},d=[{value:"I2C Scanner",id:"i2c-scanner",children:[]},{value:"INA219",id:"ina219",children:[]},{value:"GY-91",id:"gy-91",children:[{value:"BMP280",id:"bmp280",children:[]},{value:"MPU-9250",id:"mpu-9250",children:[]}]},{value:"BMP388",id:"bmp388",children:[]},{value:"LoRa RFM95W",id:"lora-rfm95w",children:[{value:"Transmitter",id:"transmitter",children:[]},{value:"Receiver",id:"receiver",children:[]}]},{value:"MicroSD Adapter",id:"microsd-adapter",children:[]},{value:"MTK3339",id:"mtk3339",children:[]}],p={toc:d};function c(n){var e=n.components,r=Object(t.a)(n,o);return Object(a.b)("wrapper",Object(i.a)({},p,r,{components:e,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Os trechos de c\xf3digo abaixo servem para testar os m\xf3dulos presentes no EPS e CDHS. Eles foram utilizados durante a valida\xe7\xe3o das placas-prot\xf3tipo e servem para identificar o funcionamento correto dos sensores. Os pinos j\xe1 est\xe3o de acordo com os utilizados pelo teensy no CDHS."),Object(a.b)("p",null,"Mais informa\xe7\xe3o sobre os testes de integra\xe7\xe3o ",Object(a.b)("a",{parentName:"p",href:"/docs/aurorav2/hardware/placas/integracao/epscdhs"},"aqui"),"."),Object(a.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(a.b)("div",{parentName:"div",className:"admonition-heading"},Object(a.b)("h5",{parentName:"div"},Object(a.b)("span",{parentName:"h5",className:"admonition-icon"},Object(a.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},Object(a.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Observa\xe7\xe3o")),Object(a.b)("div",{parentName:"div",className:"admonition-content"},Object(a.b)("p",{parentName:"div"},"Cada trecho abaixo inicia o monitor serial numa taxa diferente. Lembre-se de fazer o ajuste necess\xe1rio em platformio.ini:"),Object(a.b)("pre",{parentName:"div"},Object(a.b)("code",{parentName:"pre",className:"language-cpp"},"; PlatformIO Project Configuration File\n\n[env:teensy35]\nplatform = teensy\nboard = teensy35\nframework = arduino\nlib_deps = //Suas libs\nmonitor_speed = 9600 //Mudar aqui\n")))),Object(a.b)("h2",{id:"i2c-scanner"},"I2C Scanner"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-cpp"},'// I2C Scanner\n// Data: 27/01/21\n// O prop\xf3sito desse c\xf3digo \xe9 identificar \n// os dispositivos I2C conectados ao \n// microcontrolador e printar seus endere\xe7os;\n\n#include <Arduino.h>\n#include <Wire.h>\n\nvoid setup()\n{\n    Wire.begin();\n\n    Serial.begin(9600);\n    while (!Serial); \n    Serial.println("\\nI2C Scanner");\n}\n\nvoid loop()\n{\n    byte error, address;\n    int nDevices;\n\n    Serial.println("Scanning...");\n\n    nDevices = 0;\n    for (address = 1; address < 127; address++)\n    {\n        // The i2c_scanner uses the return value of\n        // the Write.endTransmisstion to see if\n        // a device did acknowledge to the address.\n        Wire.beginTransmission(address);\n        error = Wire.endTransmission();\n\n        if (error == 0)\n        {\n            Serial.print("I2C device found at address 0x");\n            if (address < 16)\n                Serial.print("0");\n            Serial.print(address, HEX);\n            Serial.println("  !");\n\n            nDevices++;\n        }\n        else if (error == 4)\n        {\n            Serial.print("Unknown error at address 0x");\n            if (address < 16)\n                Serial.print("0");\n            Serial.println(address, HEX);\n        }\n    }\n    if (nDevices == 0)\n        Serial.println("No I2C devices found\\n");\n    else\n        Serial.println("done\\n");\n\n    delay(5000); // wait 5 seconds for next scan\n}\n')),Object(a.b)("h2",{id:"ina219"},"INA219"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-cpp"},'// INA219\n// Leitura de tens\xe3o, corrente e pot\xeancia \n// Data: 27/01/21\n// Libs: Adafruit INA219, Adafruit Sensor\n\n#include <Arduino.h>\n#include <Adafruit_Sensor.h>\n#include <Wire.h>\n#include <Adafruit_INA219.h>\n\nAdafruit_INA219 ina219;\n\nvoid setup(void)\n{\n    Serial.begin(115200);\n    while (!Serial)\n    {\n        // will pause Zero, Leonardo, etc until serial console opens\n        delay(1);\n    }\n\n    uint32_t currentFrequency;\n\n    Serial.println("Hello!");\n\n    // Initialize the INA219.\n    // By default the initialization will use the largest range (32V, 2A).  However\n    // you can call a setCalibration function to change this range (see comments).\n    if (!ina219.begin())\n    {\n        Serial.println("Failed to find INA219 chip");\n        while (1)\n        {\n            delay(10);\n        }\n    }\n    // To use a slightly lower 32V, 1A range (higher precision on amps):\n    //ina219.setCalibration_32V_1A();\n    // Or to use a lower 16V, 400mA range (higher precision on volts and amps):\n    //ina219.setCalibration_16V_400mA();\n\n    Serial.println("Measuring voltage and current with INA219 ...");\n}\n\nvoid loop(void)\n{\n    float shuntvoltage = 0;\n    float busvoltage = 0;\n    float current_mA = 0;\n    float loadvoltage = 0;\n    float power_mW = 0;\n\n    shuntvoltage = ina219.getShuntVoltage_mV();\n    busvoltage = ina219.getBusVoltage_V();\n    current_mA = ina219.getCurrent_mA();\n    power_mW = ina219.getPower_mW();\n    loadvoltage = busvoltage + (shuntvoltage / 1000);\n\n    Serial.print("Bus Voltage:   ");\n    Serial.print(busvoltage);\n    Serial.println(" V");\n    Serial.print("Shunt Voltage: ");\n    Serial.print(shuntvoltage);\n    Serial.println(" mV");\n    Serial.print("Load Voltage:  ");\n    Serial.print(loadvoltage);\n    Serial.println(" V");\n    Serial.print("Current:       ");\n    Serial.print(current_mA);\n    Serial.println(" mA");\n    Serial.print("Power:         ");\n    Serial.print(power_mW);\n    Serial.println(" mW");\n    Serial.println("");\n\n    delay(2000);\n}\n')),Object(a.b)("h2",{id:"gy-91"},"GY-91"),Object(a.b)("h3",{id:"bmp280"},"BMP280"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-cpp"},'// BMP280\n// Leitura de temperatura, press\xe3o e altitude.\n// Data: 27/01/21\n// Libs: Adafruit BMP280\n// Observa\xe7\xe3o: Lembrar de mudar o par\xe2metro de bmp.readAltitude()\n// de acordo com a press\xe3o do n\xedvel do mar local.\n\n#include <Arduino.h>\n#include <Wire.h>\n#include <SPI.h>\n#include <Adafruit_BMP280.h>\n\nAdafruit_BMP280 bmp; // I2C\n\nvoid setup()\n{\n    Serial.begin(9600);\n    Serial.println(F("BMP280 test"));\n\n    if (!bmp.begin())\n    {\n        Serial.println(F("Could not find a valid BMP280 sensor, check wiring!"));\n        while (1);\n    }\n\n    /* Default settings from datasheet. */\n    bmp.setSampling(Adafruit_BMP280::MODE_NORMAL,     /* Operating Mode. */\n                    Adafruit_BMP280::SAMPLING_X2,     /* Temp. oversampling */\n                    Adafruit_BMP280::SAMPLING_X16,    /* Pressure oversampling */\n                    Adafruit_BMP280::FILTER_X16,      /* Filtering. */\n                    Adafruit_BMP280::STANDBY_MS_500); /* Standby time. */\n}\n\nvoid loop()\n{\n    Serial.print(F("Temperature = "));\n    Serial.print(bmp.readTemperature());\n    Serial.println(" *C");\n\n    Serial.print(F("Pressure = "));\n    Serial.print(bmp.readPressure());\n    Serial.println(" Pa");\n\n    Serial.print(F("Approx altitude = "));\n    Serial.print(bmp.readAltitude(1013.25)); /* Adjusted to local forecast! */\n    Serial.println(" m");\n\n    Serial.println();\n    delay(2000);\n}\n')),Object(a.b)("h3",{id:"mpu-9250"},"MPU-9250"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-cpp"},'// MPU-9250\n// Leitura do aceler\xf4metro, girosc\xf3pio, magnet\xf4metro e temperatura \n// Data: 27/01/21\n// Libs: MPU9250\n\n#include <Arduino.h>\n#include "MPU9250.h"\n\n// an MPU9250 object with the MPU-9250 sensor on I2C bus 0 with address 0x68\nMPU9250 IMU(Wire, 0x68);\nint status;\n\nvoid setup()\n{\n    // serial to display data\n    Serial.begin(115200);\n    while (!Serial){}\n\n    // start communication with IMU\n    status = IMU.begin();\n    if (status < 0)\n    {\n        Serial.println("IMU initialization unsuccessful");\n        Serial.println("Check IMU wiring or try cycling power");\n        Serial.print("Status: ");\n        Serial.println(status);\n        while (1)\n        {\n        }\n    }\n}\n\nvoid loop()\n{\n    // read the sensor\n    IMU.readSensor();\n    // display the data\n    Serial.print(IMU.getAccelX_mss(), 6);\n    Serial.print("\\t");\n    Serial.print(IMU.getAccelY_mss(), 6);\n    Serial.print("\\t");\n    Serial.print(IMU.getAccelZ_mss(), 6);\n    Serial.print("\\t");\n    Serial.print(IMU.getGyroX_rads(), 6);\n    Serial.print("\\t");\n    Serial.print(IMU.getGyroY_rads(), 6);\n    Serial.print("\\t");\n    Serial.print(IMU.getGyroZ_rads(), 6);\n    Serial.print("\\t");\n    Serial.print(IMU.getMagX_uT(), 6);\n    Serial.print("\\t");\n    Serial.print(IMU.getMagY_uT(), 6);\n    Serial.print("\\t");\n    Serial.print(IMU.getMagZ_uT(), 6);\n    Serial.print("\\t");\n    Serial.print(IMU.getTemperature_C(), 6);\n    Serial.print("\\n");\n    delay(100);\n}\n')),Object(a.b)("h2",{id:"bmp388"},"BMP388"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-cpp"},'// BMP388\n// Leitura de temperatura, press\xe3o e altitude.\n// Data: 27/01/21\n// Libs: Adafruit BMP3XX, Adafruit Sensor\n// Observa\xe7\xe3o: Ajustar SEALEVELPRESSURE_HPA de acordo\n// com a press\xe3o do n\xedvel do mar local.\n\n#include <Arduino.h>\n#include <Wire.h>\n#include <Adafruit_Sensor.h>\n#include "Adafruit_BMP3XX.h"\n\n#define SEALEVELPRESSURE_HPA (1013.25)\n\nAdafruit_BMP3XX bmp;\n\nvoid setup()\n{\n    Serial.begin(9600);\n    while (!Serial);\n    Serial.println("Adafruit BMP388 / BMP390 test");\n\n    if (!bmp.begin_I2C()) // hardware I2C mode, can pass in address & alt Wire\n    { \n        Serial.println("Could not find a valid BMP3 sensor, check wiring!");\n        while (1);\n    }\n\n    // Set up oversampling and filter initialization\n    bmp.setTemperatureOversampling(BMP3_OVERSAMPLING_8X);\n    bmp.setPressureOversampling(BMP3_OVERSAMPLING_4X);\n    bmp.setIIRFilterCoeff(BMP3_IIR_FILTER_COEFF_3);\n    bmp.setOutputDataRate(BMP3_ODR_50_HZ);\n}\n\nvoid loop()\n{\n    if (!bmp.performReading())\n    {\n        Serial.println("Failed to perform reading :(");\n        return;\n    }\n    Serial.print("Temperature = ");\n    Serial.print(bmp.temperature);\n    Serial.println(" *C");\n\n    Serial.print("Pressure = ");\n    Serial.print(bmp.pressure / 100.0);\n    Serial.println(" hPa");\n\n    Serial.print("Approx. Altitude = ");\n    Serial.print(bmp.readAltitude(SEALEVELPRESSURE_HPA));\n    Serial.println(" m");\n\n    Serial.println();\n    delay(2000);\n}\n')),Object(a.b)("h2",{id:"lora-rfm95w"},"LoRa RFM95W"),Object(a.b)("h3",{id:"transmitter"},"Transmitter"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-cpp"},'// LoRa RFM95 Transmitter Test\n// Data: 27/01/21\n// Libs: RadioHead v1.113\n// O objetivo deste c\xf3digo \xe9 programar o LoRa para\n// enviar um pacote, esperar e acusar o recebimento\n// da mensagem devolvida pelo outro LoRa.\n// O RSSI (Received Signal Strength Indication), indicador\n// de intensidade do sinal recebido, \xe9 printado.\n\n#include <Arduino.h>\n#include <SPI.h>\n#include <RH_RF95.h>\n\n// Singleton instance of the radio driver\nRH_RF95 rf95(24, 26); // (CS, INT)\n\nvoid setup()\n{\n    Serial.begin(9600);\n    while (!Serial); // Wait for serial port to be available\n    if (!rf95.init())\n        Serial.println("init failed");\n    rf95.setFrequency(915.0);\n    // Defaults after init are 434.0MHz, 13dBm, Bw = 125 kHz, Cr = 4/5, Sf = 128chips/symbol, CRC on\n\n    // You can change the modulation parameters with eg\n    // rf95.setModemConfig(RH_RF95::Bw500Cr45Sf128);\n\n    // The default transmitter power is 13dBm, using PA_BOOST.\n    // If you are using RFM95/96/97/98 modules which uses the PA_BOOST transmitter pin, then\n    // you can set transmitter powers from 2 to 20 dBm:\n    rf95.setTxPower(20, false);\n}\n\nvoid loop()\n{\n    Serial.println("Sending to rf95_server");\n    // Send a message to rf95_server\n    uint8_t data[] = "Hello World!";\n    rf95.send(data, sizeof(data));\n\n    rf95.waitPacketSent();\n    // Now wait for a reply\n    uint8_t buf[RH_RF95_MAX_MESSAGE_LEN];\n    uint8_t len = sizeof(buf);\n\n    if (rf95.waitAvailableTimeout(3000))\n    {\n        // Should be a reply message for us now\n        if (rf95.recv(buf, &len))\n        {\n            Serial.print("got reply: ");\n            Serial.println((char *)buf);\n            Serial.print("RSSI: ");\n            Serial.println(rf95.lastRssi(), DEC);\n        }\n        else\n        {\n            Serial.println("recv failed");\n        }\n    }\n    else\n    {\n        Serial.println("No reply, is rf95_server running?");\n    }\n    delay(400);\n}\n')),Object(a.b)("h3",{id:"receiver"},"Receiver"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-cpp"},'// LoRa RFM95 Receiver Test\n// Data: 27/01/21\n// Libs: RadioHead v1.113\n// O objetivo deste c\xf3digo \xe9 programar o LoRa para\n// fazer o recebimento dos dados enviados e devolver uma mensagem.\n// O RSSI (Received Signal Strength Indication), indicador\n// de intensidade do sinal recebido, \xe9 printado.\n\n#include <Arduino.h>\n#include <SPI.h>\n#include <RH_RF95.h>\n\n// Singleton instance of the radio driver\n// RH_RF95 rf95;\nRH_RF95 rf95(24, 26); // (CS, INT)\n\nint led = 13; // Used to blink\n\nvoid setup()\n{\n    pinMode(led, OUTPUT);\n    Serial.begin(9600);\n    while (!Serial); // Wait for serial port to be available\n    if (!rf95.init())\n        Serial.println("init failed");\n    rf95.setFrequency(915.0);\n    // Defaults after init are 434.0MHz, 13dBm, Bw = 125 kHz, Cr = 4/5, Sf = 128chips/symbol, CRC on\n\n    // You can change the modulation parameters with eg\n    // rf95.setModemConfig(RH_RF95::Bw500Cr45Sf128);\n\n    // The default transmitter power is 13dBm, using PA_BOOST.\n    // If you are using RFM95/96/97/98 modules which uses the PA_BOOST transmitter pin, then\n    // you can set transmitter powers from 2 to 20 dBm:\n    rf95.setTxPower(20, false);\n}\n\nvoid loop()\n{\n    if (rf95.available())\n    {\n        // Should be a message for us now\n        uint8_t buf[RH_RF95_MAX_MESSAGE_LEN];\n        uint8_t len = sizeof(buf);\n        if (rf95.recv(buf, &len))\n        {\n            digitalWrite(led, HIGH);\n            //      RH_RF95::printBuffer("request: ", buf, len);\n            Serial.print("got request: ");\n            Serial.println((char *)buf);\n            Serial.print("RSSI: ");\n            Serial.println(rf95.lastRssi(), DEC);\n\n            // Send a reply\n            uint8_t data[] = "And hello back to you";\n            rf95.send(data, sizeof(data));\n            rf95.waitPacketSent();\n            Serial.println("Sent a reply");\n            digitalWrite(led, LOW);\n        }\n        else\n        {\n            Serial.println("recv failed");\n        }\n    }\n}\n')),Object(a.b)("h2",{id:"microsd-adapter"},"MicroSD Adapter"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-cpp"},'// Adaptador MicroSD\n// Teste de escrita no cart\xe3o microSD\n// Data: 27/01/21\n// Libs: SD\n\n#include <Arduino.h>\n#include <SPI.h>\n#include <SD.h>\n\nFile myFile;\n\nvoid setup()\n{\n    // Open serial communications and wait for port to open:\n    Serial.begin(9600);\n    while (!Serial)\n    {\n        ; // wait for serial port to connect. Needed for native USB port only\n    }\n    Serial.print("Initializing SD card...");\n    if (!SD.begin(27))\n    {\n        Serial.println("initialization failed!");\n        while (1)\n            ;\n    }\n    Serial.println("initialization done.");\n    // open the file. note that only one file can be open at a time,\n    // so you have to close this one before opening another.\n    myFile = SD.open("test.txt", FILE_WRITE);\n    // if the file opened okay, write to it:\n    if (myFile)\n    {\n        Serial.print("Writing to test.txt...");\n        myFile.println("--- Inicio ---");\n        myFile.println("Data: 27/01/21");\n        myFile.println("Autor: Minerva Rockets");\n        myFile.println("Esse \xe9 um teste da escrita no cart\xe3o microSD");\n        for (int i = 0; i < 20; i++)\n        {\n            myFile.println(i);\n        }\n        myFile.println("--- Fim ---");\n        // close the file:\n        myFile.close();\n        Serial.println("done.");\n    }\n    else\n    {\n        // if the file didn\'t open, print an error:\n        Serial.println("error opening test.txt");\n    }\n}\nvoid loop()\n{\n    // nothing happens after setup\n}\n')),Object(a.b)("h2",{id:"mtk3339"},"MTK3339"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-cpp"},'// MTK-3339\n// Printa o que quer que o GPS esteja recebendo.\n// Veja o command set para interpretar:\n// https://cdn-shop.adafruit.com/datasheets/PMTK_A11.pdf\n// Data: 27/01/21\n// Libs: Adafruit GPS\n\n#include <Arduino.h>\n#include <Adafruit_GPS.h>\n#include <SoftwareSerial.h>\n\nSoftwareSerial mySerial(0, 1);\n\n#define PMTK_SET_NMEA_UPDATE_1HZ "$PMTK220,1000*1F"\n#define PMTK_SET_NMEA_UPDATE_5HZ "$PMTK220,200*2C"\n#define PMTK_SET_NMEA_UPDATE_10HZ "$PMTK220,100*2F"\n\n// turn on only the second sentence (GPRMC)\n#define PMTK_SET_NMEA_OUTPUT_RMCONLY "$PMTK314,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0*29"\n// turn on GPRMC and GGA\n#define PMTK_SET_NMEA_OUTPUT_RMCGGA "$PMTK314,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0*28"\n// turn on ALL THE DATA\n#define PMTK_SET_NMEA_OUTPUT_ALLDATA "$PMTK314,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0*28"\n// turn off output\n#define PMTK_SET_NMEA_OUTPUT_OFF "$PMTK314,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0*28"\n\n#define PMTK_Q_RELEASE "$PMTK605*31"\n\nvoid setup()\n{\n    while (!Serial)\n        ; // wait for Serial to be ready\n\n    Serial.begin(57600); // this baud rate doesn\'t actually matter!\n    mySerial.begin(9600);\n    delay(2000);\n    Serial.println("Get version!");\n    mySerial.println(PMTK_Q_RELEASE);\n\n    // you can send various commands to get it started\n    //mySerial.println(PMTK_SET_NMEA_OUTPUT_RMCGGA);\n    mySerial.println(PMTK_SET_NMEA_OUTPUT_ALLDATA);\n\n    mySerial.println(PMTK_SET_NMEA_UPDATE_1HZ);\n}\n\nvoid loop()\n{\n    if (Serial.available())\n    {\n        char c = Serial.read();\n        Serial.write(c);\n        mySerial.write(c);\n    }\n    if (mySerial.available())\n    {\n        char c = mySerial.read();\n        Serial.write(c);\n    }\n}\n')))}c.isMDXComponent=!0},179:function(n,e,r){"use strict";r.d(e,"a",(function(){return c})),r.d(e,"b",(function(){return f}));var i=r(0),t=r.n(i);function a(n,e,r){return e in n?Object.defineProperty(n,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):n[e]=r,n}function o(n,e){var r=Object.keys(n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.push.apply(r,i)}return r}function l(n){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?o(Object(r),!0).forEach((function(e){a(n,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(r,e))}))}return n}function s(n,e){if(null==n)return{};var r,i,t=function(n,e){if(null==n)return{};var r,i,t={},a=Object.keys(n);for(i=0;i<a.length;i++)r=a[i],e.indexOf(r)>=0||(t[r]=n[r]);return t}(n,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);for(i=0;i<a.length;i++)r=a[i],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(n,r)&&(t[r]=n[r])}return t}var d=t.a.createContext({}),p=function(n){var e=t.a.useContext(d),r=e;return n&&(r="function"==typeof n?n(e):l(l({},e),n)),r},c=function(n){var e=p(n.components);return t.a.createElement(d.Provider,{value:e},n.children)},u={inlineCode:"code",wrapper:function(n){var e=n.children;return t.a.createElement(t.a.Fragment,{},e)}},m=t.a.forwardRef((function(n,e){var r=n.components,i=n.mdxType,a=n.originalType,o=n.parentName,d=s(n,["components","mdxType","originalType","parentName"]),c=p(r),m=i,f=c["".concat(o,".").concat(m)]||c[m]||u[m]||a;return r?t.a.createElement(f,l(l({ref:e},d),{},{components:r})):t.a.createElement(f,l({ref:e},d))}));function f(n,e){var r=arguments,i=e&&e.mdxType;if("string"==typeof n||i){var a=r.length,o=new Array(a);o[0]=m;var l={};for(var s in e)hasOwnProperty.call(e,s)&&(l[s]=e[s]);l.originalType=n,l.mdxType="string"==typeof n?n:i,o[1]=l;for(var d=2;d<a;d++)o[d]=r[d];return t.a.createElement.apply(null,o)}return t.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"}}]);