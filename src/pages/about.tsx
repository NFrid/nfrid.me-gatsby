import * as React from "react";

import Layout from "../layout";
import { Tit, Par } from "../components/primitives";

interface AboutPageProps {
  location: {
    pathname: string;
  };
}

export default ({ location }: AboutPageProps) => {
  return (
    <Layout location={location}>
      <>
        <Tit>About this website</Tit>
        <Par>Yo I said it's not completed yet! And this page isn't too.</Par>
        <Par>Here, take some lorems:</Par>
        <Par>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo dolore
          delectus necessitatibus aliquam aspernatur, consequatur quos
          distinctio maiores, odio pariatur, consequuntur laboriosam eaque animi
          doloremque cum explicabo facere qui mollitia est alias voluptatum
          voluptatibus ipsum expedita? Doloremque, amet a similique velit, unde
          sapiente ad aut corporis facilis facere minima consequatur officia
          eius sit repudiandae corrupti doloribus atque pariatur! Quia quas fuga
          ab libero incidunt modi veritatis quos soluta pariatur reprehenderit,
          dolor quod velit laborum dignissimos nesciunt nostrum laudantium.
          Libero quibusdam in quo blanditiis officiis ipsum, fugiat numquam et?
          Voluptatem, ut inventore. Nostrum amet eos fuga similique, tempore
          aperiam vel maxime. Architecto aperiam soluta quo repellat fugit sunt
          eveniet, assumenda porro magnam, debitis velit aut. Nesciunt voluptate
          quis minus sit rem harum repellat similique ipsum. Cumque dolores,
          tempora quasi alias sapiente maiores fugiat dolorem laborum
          praesentium aperiam ad vero nam quo officia, est laudantium amet
          necessitatibus illo? Ipsum voluptatum, architecto voluptas eum ut
          nesciunt aut doloremque tempora, esse itaque soluta doloribus
          laudantium ad quidem veritatis iusto dolore incidunt, explicabo id hic
          commodi labore earum voluptates nobis. Error, perferendis! Atque
          dolores sapiente optio eligendi laboriosam vero assumenda tempora
          voluptatem similique illo rerum hic, ea incidunt. Obcaecati corrupti
          laboriosam quo commodi repellat dolore, necessitatibus quidem maxime?
          Necessitatibus vel perferendis beatae culpa deserunt minus sunt sequi
          perspiciatis tempora repellat laborum inventore distinctio ratione,
          voluptas quis nostrum rem numquam, laboriosam mollitia ab maxime.
          Beatae cum enim nobis repellat deleniti ipsum molestias ipsa
          laudantium ut voluptatum nihil debitis assumenda, exercitationem sequi
          alias expedita temporibus et nulla qui laborum minus magni quibusdam!
          Consequuntur, cumque optio. Possimus dicta quae nihil voluptate,
          velit, consequuntur magni dolorem eligendi natus aliquid culpa iusto
          quis laborum expedita amet itaque voluptates neque? Consectetur porro
          qui eveniet cum dignissimos alias, laboriosam omnis. Vitae mollitia
          illum quaerat, itaque eos nobis? Dolor laboriosam repellat rerum,
          magnam quo minus odit nulla sunt consectetur molestias nihil numquam,
          ea corrupti sed. Reprehenderit officia deleniti accusantium, eveniet
          praesentium distinctio delectus! Error minima magni praesentium? At
          reprehenderit adipisci perferendis eum mollitia iusto, laudantium
          dolore magnam explicabo dolorum? Et non minus ex rem vitae laudantium
          perferendis delectus praesentium nostrum cupiditate quibusdam, hic
          earum libero expedita? Dolor id odio repellendus. Repellendus tempore
          voluptates distinctio iste ipsa voluptate illo ullam asperiores
          aliquid labore rem, eaque nemo vitae magnam voluptas? Dolore id
          blanditiis veniam minus, inventore maxime repudiandae. Quas saepe
          earum optio dolorem error vel quod doloremque voluptas corporis
          impedit recusandae placeat nemo facilis quisquam perspiciatis fugit
          dolorum eius hic explicabo dolor magni, porro iste. Enim ipsum,
          impedit iusto perferendis delectus eius provident ullam necessitatibus
          maxime sit error, autem, culpa ipsam aliquid excepturi officiis
          eligendi eveniet voluptas asperiores illo id molestias repellat
          temporibus! Dolorem laudantium aliquam beatae sequi sed magni ab
          recusandae deleniti dignissimos, corrupti tempore deserunt soluta
          voluptas eos sint voluptatibus at? Minima illo assumenda quo possimus
          deleniti autem ducimus soluta praesentium iure. Cumque atque accusamus
          natus illo blanditiis dolorem itaque inventore dolore laudantium unde
          ullam ducimus distinctio iusto, iste fugiat? Iusto, consequuntur
          aperiam! Debitis, sit at. Quibusdam blanditiis esse magnam alias
          dolorum voluptas.
        </Par>
      </>
    </Layout>
  );
};
