export interface Testimonial {
  message: string;
  author: {
    jobTitle: string;
    avatar: string;
    firstName: string;
    lastName: string;
  };
  link: string;
}
