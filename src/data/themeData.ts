export interface Theme {
  category: string;
  themes: { title: string; emoji: string }[];
}

export const themeData: Theme[] = [
  {
    category: 'プログラミング',
    themes: [
      { title: 'JavaScript', emoji: '💻' },
      { title: 'Python', emoji: '🐍' },
      { title: 'Ruby', emoji: '💎' },
      { title: 'Java', emoji: '☕' },
      { title: 'C++', emoji: '🔧' },
    ],
  },
  {
    category: 'デザイン',
    themes: [
      { title: 'UI/UX', emoji: '🎨' },
      { title: 'グラフィックデザイン', emoji: '🖌️' },
      { title: 'Webデザイン', emoji: '🌐' },
      { title: 'アニメーション', emoji: '🎞️' },
    ],
  },
  {
    category: '資格試験',
    themes: [
      { title: 'TOEIC', emoji: '📚' },
      { title: 'ITパスポート', emoji: '💼' },
      { title: '簿記', emoji: '📊' },
      { title: '公務員試験', emoji: '🏛️' },
      { title: 'その他の資格試験', emoji: '🎓' },
    ],
  },
  {
    category: '読書',
    themes: [
      { title: '小説', emoji: '📖' },
      { title: 'ビジネス書', emoji: '📈' },
      { title: '自己啓発', emoji: '💡' },
      { title: '専門書', emoji: '📚' },
    ],
  },
  {
    category: '学生向け',
    themes: [
      { title: '数学', emoji: '➗' },
      { title: '物理', emoji: '🔬' },
      { title: '化学', emoji: '⚗️' },
      { title: '英語', emoji: '🗣️' },
      { title: '歴史', emoji: '🏺' },
    ],
  },
  {
    category: 'ビジネス',
    themes: [
      { title: 'マーケティング', emoji: '📊' },
      { title: 'プロジェクト管理', emoji: '📅' },
      { title: '起業', emoji: '🚀' },
      { title: 'リーダーシップ', emoji: '👔' },
    ],
  },
  {
    category: 'ライフスキル',
    themes: [
      { title: 'タイムマネジメント', emoji: '⏰' },
      { title: 'コミュニケーション', emoji: '💬' },
      { title: 'プレゼンテーション', emoji: '📢' },
      { title: 'クリティカルシンキング', emoji: '🧠' },
    ],
  },
];
