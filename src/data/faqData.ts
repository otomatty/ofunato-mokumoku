import { AccordionItemProps } from "../components/Accordion/Accordion";

interface ExtendedAccordionItemProps extends AccordionItemProps {
  isFeatured: boolean;
}

export const faqItems: ExtendedAccordionItemProps[] = [
  {
    category: "基本情報",
    title: "もくもく会とは何ですか？",
    content:
      "もくもく会は、参加者が各自の作業を集中して行うためのイベントです。",
    isFeatured: true,
  },
  {
    category: "基本情報",
    title: "もくもく会の目的は何ですか？",
    content:
      "もくもく会の目的は、参加者が集中して作業を進めるための環境を提供することです。",
    isFeatured: false,
  },
  {
    category: "基本情報",
    title: "もくもく会の歴史や背景について教えてください。",
    content:
      "もくもく会は、作業に集中するための時間と場所を提供するために始まりました。最初は小規模な集まりから始まり、現在では多くの人々が参加しています。",
    isFeatured: false,
  },
  {
    category: "基本情報",
    title: "参加に制限はありますか？",
    content:
      "どなたでもご参加いただけます。学生、社会人、学習意欲のある方は大歓迎です。",
    isFeatured: true,
  },
  {
    category: "基本情報",
    title: "主催者はどなたですか？",
    content: "大船渡もくもく会は、地域の有志によって運営しております。",
    isFeatured: false,
  },
  {
    category: "基本情報",
    title: "もくもく会の参加人数はどのくらいですか？",
    content:
      "もくもく会の参加人数はイベントによって異なりますが、通常は50人から20人程度です。",
    isFeatured: false,
  },
  {
    category: "参加方法",
    title: "参加するにはどうすればいいですか？",
    content:
      "もくもく会に参加するには、こちらのサイトの参加申し込みフォームから申し込みを行ってください。",
    isFeatured: true,
  },
  {
    category: "参加方法",
    title: "参加費はかかりますか？",
    content: "参加費は基本的に無料です。",
    isFeatured: true,
  },
  {
    category: "参加方法",
    title: "事前登録は必要ですか？",
    content:
      "はい、事前登録が必要です。事前登録を行うことで、スムーズに参加することができます。",
    isFeatured: false,
  },
  {
    category: "参加方法",
    title: "当日参加は可能ですか？",
    content:
      "当日参加も可能です。ただし、事前に登録しておくことをお勧めします。",
    isFeatured: false,
  },
  {
    category: "参加方法",
    title: "参加に必要な持ち物はありますか？",
    content:
      "もくもく会に参加する際には、自分の作業に必要なノートパソコンや資料を持参してください。",
    isFeatured: false,
  },
  {
    category: "参加方法",
    title: "オンラインでの参加は可能ですか？",
    content:
      "Youtubeを使用した限定配信を行なっております。参加されるとコミュニティへ招待されますので詳細につきましてはコミュニティの方でご確認ください。",
    isFeatured: false,
  },
  {
    category: "イベントの詳細",
    title: "もくもく会の開催場所はどこですか？",
    content:
      "もくもく会の開催場所はイベントごとに異なります。詳細は各イベントのページをご確認ください。",
    isFeatured: false,
  },
  {
    category: "イベントの詳細",
    title: "もくもく会の開催時間はいつですか？",
    content:
      "もくもく会の開催時間はイベントごとに異なります。基本的には火曜日18:00~21:00、土曜日14:00~17:00となっております。",
    isFeatured: false,
  },
  {
    category: "イベントの詳細",
    title: "どのような設備が利用できますか？",
    content:
      "利用する施設によりますが、電源、Wi-Fi、机、椅子などの基本的な設備が提供されます。",
    isFeatured: false,
  },
  {
    category: "イベントの詳細",
    title: "飲食物の持ち込みは可能ですか？",
    content:
      "飲食物の持ち込みが可能です。ただし、会場によっては制限がある場合がありますので、詳細は各イベントのページをご確認ください。",
    isFeatured: false,
  },
  {
    category: "イベントの詳細",
    title: "駐車場はありますか？",
    content: "駐車場はございますが、駐車台数は会場によって異なります。",
    isFeatured: false,
  },
  {
    category: "ルールとマナー",
    title: "もくもく会のルールはありますか？",
    content:
      "他の参加者の迷惑にならないようにお願いいたします。詳細はルールをご確認ください。",
    isFeatured: false,
  },
  {
    category: "ルールとマナー",
    title: "途中参加や途中退場は可能ですか？",
    content: "はい、途中参加や途中退場は可能です。",
    isFeatured: false,
  },
  {
    category: "ルールとマナー",
    title: "他の参加者と話してもいいですか？",
    content:
      "基本的には個人で作業を行うことになりますが、質問や相談などは自由に行なっていただけます。",
    isFeatured: false,
  },
  {
    category: "サポートとフォローアップ",
    title: "何か質問がある場合はどうすればいいですか？",
    content: "質問がある場合は、イベントの主催者に直接お問い合わせください。",
    isFeatured: false,
  },
  {
    category: "その他",
    title: "もくもく会に関するお問い合わせ先はどこですか？",
    content:
      "もくもく会に関するお問い合わせは、各イベントの主催者に直接ご連絡ください。連絡先はイベントページに記載されています。",
    isFeatured: false,
  },
  {
    category: "その他",
    title: "もくもく会のキャンセルポリシーはありますか？",
    content: "詳細はこちらをご確認ください。",
    isFeatured: false,
  },
  {
    category: "その他",
    title: "もくもく会の参加に年齢制限はありますか？",
    content: "年齢制限はございません。",
    isFeatured: false,
  },
  {
    category: "その他",
    title: "もくもく会の参加に特別なスキルは必要ですか？",
    content:
      "特別なスキルは必要ありません。初心者から上級者まで、どなたでも参加できます。",
    isFeatured: true,
  },
];
