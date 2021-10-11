import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const features = [
    {
        title: (
          <a href="docs/reuniao/21_1/0108r">
          Reuniões
          </a>
        ),
        imageUrl: 'img/undraw_meeting.svg',
        description: (
          <>
          Atas das reuniões semanais: informes, feedback, novas tarefas...
          </>
        ),
    },
    {
        title: (
            <a href="docs/aurorav2/hardware/placas/eps">
            Hardware
          </a>
        ),
        imageUrl: 'img/undraw_hardware.svg',
        description: (
            <>
        Boas práticas do Altium, esquemáticos, PCBs...
        </>
        ),
    },
    {
        title: (
          <a href="docs/aurorav2/software/testes/funcionamento">
            Software
          </a>
        ),
        imageUrl: 'img/undraw_software.svg',
        description: (
        <>
        Códigos de teste, protocolos, boas práticas...  
        </>
        ),
    }
];

function Feature({imageUrl, title, description}) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx('col col--4 topicresume', styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout
      title="Home"
      description="Documentação da Aviônica | Minerva Rockets">
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className={clsx(
                'button button--outline button--secondary button--lg',
                styles.getStarted,
              )}
              to={useBaseUrl('docs/')}>
              Ver Docs
            </Link>
          </div>
        </div>
      </header>
      <main>
        {features && features.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}

export default Home;
