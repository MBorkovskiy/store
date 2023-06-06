export interface IReview {
  author: string;
  body: string;
  date: string;
  rating: number;
}

export const reviews: IReview[] = [
  {
    author: "John M",
    body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus nobis dolor quam quo architecto iusto, assumenda fugit nihil eum ex corrupti repellendus consequuntur officiis vel ducimus repudiandae est, sed commodi.",
    date: "12.05.2023",
    rating: 4.5,
  },
  {
    author: "Erick J",
    body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus nobis dolor quam quo architecto iusto, assumenda fugit nihil eum ex corrupti repellendus consequuntur officiis vel ducimus repudiandae est, sed commodi.",
    date: "24.02.2023",
    rating: 5,
  },
  {
    author: "Peter Q",
    body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus nobis dolor quam quo architecto iusto, assumenda fugit nihil eum ex corrupti repellendus consequuntur officiis vel ducimus repudiandae est, sed commodi.",
    date: "01.12.2022",
    rating: 4.8,
  },
  {
    author: "Edith R",
    body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus nobis dolor quam quo architecto iusto, assumenda fugit nihil eum ex corrupti repellendus consequuntur officiis vel ducimus repudiandae est, sed commodi.",
    date: "24.03.2023",
    rating: 5,
  },
  {
    author: "Shown T",
    body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus nobis dolor quam quo architecto iusto, assumenda fugit nihil eum ex corrupti repellendus consequuntur officiis vel ducimus repudiandae est, sed commodi.",
    date: "29.04.2023",
    rating: 4.3,
  },
];
