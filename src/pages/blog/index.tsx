import * as React from "react";

import Layout from "../../layout/index";
import { Link } from "gatsby";

import PageProps from "../../ifaces/PageProps";
import Blog from "../../components/Blog";

const BlogPage: React.FC<PageProps> = ({ location }) => {
  return (
    <Layout
      location={location}
      seo={{
        title: "Blog",
        desc: "My personal blog | Nick Friday the Blogger",
      }}
    >
      <>
        <ul>
          <li>
            <Link to={`/blog/tech`}>[ENG] Technologies and stuff</Link>
          </li>
          <li>
            <Link to={`/blog/fic`}>[RUS] Околохудожественное</Link>
          </li>
          <li>
            <Link to={`/blog/etc`}>[RUS] Прочее</Link>
          </li>
        </ul>
        <hr />
        <Blog />
      </>
    </Layout>
  );
};

export default BlogPage;
