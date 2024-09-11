import { Component, createSignal, onCleanup, onMount } from 'solid-js';
import { FeaturesWrapper, FeatureCard, IconWrapper } from './Features.styled';
import SectionContainer from '../../../../components/SectionContainer/SectionContainer';
import SectionTitle from '../../../../components/SectionTitle/SectionTitle';

interface Feature {
  title: string;
  description: string;
  icon: string;
}

const Features: Component = () => {
  const [selectedFeature, setSelectedFeature] = createSignal<Feature | null>(
    null
  );
  const [isVisible, setIsVisible] = createSignal(false);

  const features: Feature[] = [
    {
      title: 'アウトプットできる環境',
      description:
        '自分の学んだことをすぐに実践し、アウトプットすることができます。',
      icon: '💡',
    },
    {
      title: '初心者から上級者まで歓迎',
      description: '初心者から上級者まで、どんなレベルの方でも歓迎します。',
      icon: '👨‍🎓',
    },
    {
      title: '年齢制限なし',
      description: '学生も社会人も意欲がある方はどなたでも参加できます。',
      icon: '🌍',
    },
    {
      title: 'オンラインからも参加可能',
      description: 'オンラインでも参加できるので、場所を問わず参加できます。',
      icon: '💻',
    },
    {
      title: 'メンター常駐',
      description: '困ったときにはメンターが学習の計画を一緒に考えます。',
      icon: '👨‍🏫',
    },
    {
      title: '参加費無料',
      description: '参加費は無料なので、気軽に参加できます。',
      icon: '💰',
    },
  ];

  const handleCardClick = (feature: Feature) => {
    setSelectedFeature(feature);
  };

  const closeModal = () => {
    setSelectedFeature(null);
  };

  onMount(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.1 }
    );

    const element = document.querySelector('.features-grid');
    if (element) {
      observer.observe(element);
    }

    onCleanup(() => {
      observer.disconnect();
    });
  });

  return (
    <SectionContainer>
      <FeaturesWrapper>
        <SectionTitle title="自分の可能性を広げるチャンスです" />
        <div class="features-grid">
          {features.map((feature) => (
            <FeatureCard onClick={() => handleCardClick(feature)}>
              <IconWrapper class={isVisible() ? 'animate' : ''}>
                {feature.icon}
              </IconWrapper>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </FeatureCard>
          ))}
        </div>
        {selectedFeature() && (
          <div class="modal">
            <div class="modal-content">
              <span class="close" onClick={closeModal}>
                &times;
              </span>
              <h3>{selectedFeature()?.title}</h3>
              <p>{selectedFeature()?.description}</p>
            </div>
          </div>
        )}
      </FeaturesWrapper>
    </SectionContainer>
  );
};

export default Features;
