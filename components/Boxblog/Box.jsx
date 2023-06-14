
import Link from "next/link";
import styles from "./box.module.css";

const Blog = ({blogs}) => {
  return (
    <>
    <div className='md:mx-[60px] mx-[10px]'>
    <div className={styles.mainContainer}>
      {blogs.length>0 &&blogs.map((item) => (
        <Link   href={`/blog/${item.slug}`} className={styles.container} key={item.id}>
          <div key={item._id} className={styles.imageContainer}>
            <img
              src={item.img}
              alt="Blogger"
              width={400}
              height={250}
              className={styles.image}
            />
          </div>
          <div className={styles.content}>
            <h1 className={styles.title}>{item.title.slice(0,123)}</h1>
            <p className={styles.desc}>{item.desc.slice(0,450)}</p>
          </div>
        </Link>
      ))}
    </div>
    </div>
    </>
  );
};

export default Blog;
