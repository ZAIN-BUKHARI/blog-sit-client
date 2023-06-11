import Image from "next/image";
import Link from "next/link";
import Container from "../../../slugcomp/container";
import one from '../../../public/one.jpeg'


// import CategoryLabel from "../../slugcomp/category";
// import AuthorCard from "@/components/blog/authorCard";

export default function Post() {
    const post={
        title:"Architectural Engineering Wonders of the modern era for your Inspiration",
        name:"zain",
        category:'Business',
        body:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor perferendis commodi assumenda maiores, corporis velit quo sequi error cupiditate magnam, consectetur neque, iste optio harum est! Vero distinctio nam quia rerum omnis consequatur consequuntur hic aliquam iusto voluptas? Maxime culpa ut quidem assumenda iusto itaque molestias nesciunt, minus natus distinctio perspiciatis esse accusantium. Voluptate in eius ipsam fugiat quae a repellendus provident eum repudiandae. Assumenda, at error pariatur, reiciendis labore, illo expedita delectus necessitatibus aut qui asperiores distinctio voluptatum fugit tenetur. Culpa amet blanditiis enim repudiandae voluptate velit laboriosam nesciunt ut, est temporibus, ipsam iusto, rerum architecto voluptatem placeat hic ex asperiores consequatur. Minus, reiciendis doloribus ab quia esse, nulla officia, nesciunt modi animi nemo nobis. Ab fugit, ea fuga sapiente voluptatum cum ducimus numquam voluptate pariatur, molestiae esse soluta,'
    }
  

  return (
    <>
    
        <div className="mx-auto max-w-screen-md ">
          <div className="flex justify-center">
            <h2 className="font-serif text-gray-800 text-2xl">{post.category}</h2>
          </div>

          <h1 className="text-black mb-3 mt-2 text-center text-3xl font-semibold tracking-tight  lg:text-4xl lg:leading-snug">
            {post.title}
          </h1>

          <div className="mt-3 flex justify-center space-x-3 text-gray-500 ">
            <div className="flex items-center gap-3">
              <div className="relative h-10 w-10 flex-shrink-0">
                  <Link href={`/`}>
                    <img
                    src='https://images.pexels.com/photos/5882707/pexels-photo-5882707.jpeg?auto=compress&cs=tinysrgb&w=400'
                      className="rounded-full object-cover"
                      fill
                      sizes="40px"
                    />
                  </Link>
              </div>
              <div>
                <p className="text-gray-1000 ">
                  <Link href={`/`}>
                    {post.name}
                  </Link>
                </p>
                <div className="flex items-center space-x-2 text-sm">
                  <time
                    className="text-gray-500 dark:text-gray-400"
                    >
                  <span> October 21,2023 · 5 min read</span>
                  </time>
                </div>
              </div>
            </div>
          </div>
        </div>

      <div className="relative mt-10 mb-10 z-0 mx-auto aspect-video max-w-screen-lg overflow-hidden lg:rounded-lg">
        
          <img
          src='https://images.pexels.com/photos/5882707/pexels-photo-5882707.jpeg?auto=compress&cs=tinysrgb&w=400'
            loading="eager"
            fill
            sizes="100vw"
            className="object-cover "
          />
      </div>

      <Container>
        <article className="mx-auto max-w-screen-md ">
          <div className="prose mx-auto my-3 text-gray-800 ">
            {post.body.slice(0,1000)}
            <br/>
            <br/>
            <br/>
            {post.body.slice(0,1000)}
          </div>
          <div className="mb-7 mt-7 flex justify-center">
          </div>
        </article>
      </Container>
    </>
  );
}


