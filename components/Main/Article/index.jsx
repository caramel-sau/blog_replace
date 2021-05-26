import { getSortedPostsData } from "lib/posts";
import Link from "next/link";

const ITEMS = [
  {
    img: "https://placehold.jp/300x300.png",
    title: "1つ目のタイトルです",
    category: "Programming",
    date: "2020/05/08",
    href: "https://example.com",
  },
  {
    img: "https://placehold.jp/300x300.png",
    title: "2つ目のタイトルです",
    category: "Design",
    date: "2020/05/10",
    href: "https://example.com",
  },
  {
    img: "https://placehold.jp/300x300.png",
    title: "3つ目のタイトルです",
    category: "Life",
    date: "2020/05/18",
    href: "https://example.com",
  },
  {
    img: "https://placehold.jp/300x300.png",
    title: "4つ目のタイトルです",
    category: "Design",
    date: "2020/07/08",
    href: "https://example.com",
  },
];

export function Article() {
  return (
    <article className="grid grid-cols-2 gap-8">
      {ITEMS.map((item) => {
        return (
          <Link href="#" className="card">
            <a>
              <div className="card__thumbanil">
                <img src={item.img} alt="" />
              </div>
              <h2 className="text-2xl font-bold">{item.title}</h2>
              <div className="card__bottom">
                <a className="text-sm bg-primary text-white p-2 mr-2">
                  {item.title}
                </a>
                <span className="text-sm">{item.date}</span>
              </div>
            </a>
          </Link>
        );
      })}
    </article>
  );
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}
