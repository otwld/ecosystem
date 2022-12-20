export type Media = TweetMedia | ArticleMedia;

export interface TweetMedia {
  type: 'tweet';
  tweetId: string;
}

export interface ArticleMedia {
  type: 'article';
  logo: string;
  title: string;
  author: string;
  link: string;
  image: string;
}
