import { Component } from 'solid-js';
import { FAQWrapper, FAQInner } from './FAQ.styled';
import Accordion from '../../../../components/Accordion/Accordion';
import SectionContainer from '../../../../components/SectionContainer/SectionContainer';
import SectionTitle from '../../../../components/SectionTitle/SectionTitle';
import { faqItems } from '../../../../data/faqData';

const FAQ: Component = () => {
  const featuredItems = faqItems.filter((item) => item.isFeatured);

  return (
    <SectionContainer className="faq-section">
      <FAQWrapper>
        <SectionTitle title="気になることはありますか？" />
        <FAQInner>
          <Accordion items={featuredItems} allowMultiple={true} />
          <p>
            その他の質問は<a href="/faq">FAQページ</a>をご確認ください。
          </p>
        </FAQInner>
      </FAQWrapper>
    </SectionContainer>
  );
};

export default FAQ;
