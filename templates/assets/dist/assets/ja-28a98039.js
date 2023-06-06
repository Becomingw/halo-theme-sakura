const home = {
  feature: {
    title: "焦点"
  },
  discovery: "見つける",
  video: {
    loading: "ビデオをロード中です...",
    loading_error: "ビデオのローディングに失敗しました。",
    statu_pause: "一時停止中...",
    statu_waiting: "読み込み中 ...",
    statu_error: "ビデオの再生中にエラーが発生しました"
  }
};
const postlist = {
  time: "発表は {{ time, datetimeFormat }}",
  heat: "{{ visit }} 人気",
  comments: "{{ comment }} つコメント"
};
const post = {
  time: "発表は {{ time, datetimeFormat }}",
  edit_time: "最終編集は {{ editTime, datetimeFormat }}",
  prev: "Previous Post",
  next: "Next Post",
  visits: "{{ visit }} 回読む",
  reward: "賞",
  license: "表示 - 非営利 - 継承 4.0 国際 (CC BY-NC-SA 4.0)",
  copyright_template_html: {
    info: "# 商用引用は著者に連絡して許可を得てください、非商用引用の場合は出典を明記してください。<br>",
    license: "# ライセンス(License): $t(post.license)<br>",
    author: "# 作者(Author): {{ postAuthor }} <br>",
    url: "# リンク(URL): {{ postUrl }} <br>",
    source: "# 出典(Source): {{ siteName }} <br>"
  },
  word_count_toast: {
    content: "この記事の全体の文字数は <b>{{ postWordCount }}</b> 字であり、読むのに必要な時間は <b> {{ timeString }}</b> です。{{ remind }}",
    remind: "この記事は平均的な長さで、心置きなく読めます。",
    remind_normal: "この記事は平均的な長さで、心置きなく読めます。",
    remind_medium: "この記事は非常に長いため、段落に分けて読むことをおすすめします。",
    remind_difficulty: "この記事の内容は非常に古く、もはや適用されないかもしれません。"
  },
  edit_time_toast: {
    content: "この記事の最終更新時間は<b>{{ sinceLastTime }}</b>です。{{ remind }}",
    remind: "最近更新された記事ですので、安心してお読みください！",
    remind_normal: "最近更新された記事ですので、安心してお読みください！",
    remind_medium: "この記事の更新は以前に行われたため、もはや適用されない場合があります。",
    remind_difficulty: "この記事の内容は非常に古く、もはや適用されないかもしれません。"
  }
};
const page = {
  next: "次のページ",
  theend: "ブログ投稿はもうない",
  archives: {
    title: "アーカイブ"
  },
  categories: {
    title: "分類",
    item_title: "分類：{{ title }}",
    radar_title: "$t(page.categories.title) レーダーチャート",
    radar_series_title: "$t(page.categories.title) 数量"
  },
  photos: {
    title: "ギャラリー",
    all: "全部"
  },
  links: {
    title: "リンク集"
  },
  moments: {
    title: "日誌",
    loadmore: "もっと読み込む...",
    empty: "ブロガーが怠け過ぎて、ここにはまだ何もないよ~",
    time: " {{ time, datetimeFormat }}"
  },
  search: {
    title: "「 {{ title }} 」の検索結果",
    sresult: "検索結果："
  },
  tags: {
    title: "タグ",
    item: {
      title: "タグ：{{ title }}"
    }
  },
  none: {
    title: "何も見つからない！(つд⊂)",
    search: "期待するものが見つからない。他に見てご覧？(๑ŏ _ ŏ๑)",
    notfound: "期待するものが見つからなかったらしい。検索してみる。(  ˶ˊᵕˋ)੭♡"
  }
};
const comment = {
  number: "{{ comment }} つコメント",
  name: "コメント |"
};
const notfound = {
  title: "ページが見つからない - {{ title }}",
  golast: "前のページに戻る",
  gohome: "ホームページに戻る",
  search: "焦らないで、サイト内検索してみる？",
  search_2: "Don't worry, search in site?",
  searchinput: "検索..."
};
const user = {
  description: "俺様はステータスなしが大好き😎",
  login: "ログイン",
  has_logged: "ようこそ",
  info: "プロフィール",
  logout: "ログアウト"
};
const icon_alt = {
  wechat: "WeChat 公式アカウント",
  sina: "Weibo",
  qq: "チャットする？",
  qzone: "QQ 空間",
  github: "Github",
  lofter: "LOFTER",
  bili: "ビリビリ",
  cloudmusic: "NetEase Cloud Music",
  twitter: "ツイッター",
  facebook: "フェイスブック",
  googleplus: "Google+",
  jianshu: "Jianshu",
  zhihu: "知乎",
  csdn: "CSDN",
  telegram: "テレグラム",
  email: "メール",
  stackoverflow: "Stack Overflow"
};
const share = {
  weibo: "Weibo に共有する",
  qq: "QQ に共有する",
  wechat: {
    qcode_title: "WeChat スキャン：共有する",
    help_1: "WeChatに「発見」をクリックして、",
    help_2: "QRコードをスキャンしたら、このブログ投稿がモーメンツに共有してある。"
  },
  douban: "Douban に共有する",
  qzone: "QQ 空間に共有する",
  linkedin: "リンクトインに共有する"
};
const theme = {
  change_button_text: "テーマ切り替え | SCHEME TOOL"
};
const common = {
  days: "{{ count }} 日",
  hours: "{{ count }} 時間",
  minutes: "{{ count }} 分",
  seconds: "{{ count }} 秒",
  events: {
    copy: "コピーに成功しました！<br>Copied to clipboard successfully!"
  },
  copy_code: "コードをコピー"
};
const ja = {
  home,
  postlist,
  post,
  page,
  comment,
  notfound,
  user,
  icon_alt,
  share,
  theme,
  common
};
export {
  comment,
  common,
  ja as default,
  home,
  icon_alt,
  notfound,
  page,
  post,
  postlist,
  share,
  theme,
  user
};
