import { Link } from "react-router-dom";
import Layout from '../components/Layout/Layout'
import '../styles.css'
function Home() {
  return (
    <Layout>
       <h1>Lorem Ipsum</h1>
       <p className="accueil-paragraphe">
       Lorem Ipsum is simply dummy text of the printing and typesetting industry.
       Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
       when an unknown printer took a galley of type and scrambled it to make a type specimen book.
       It has survived not only five centuries, but also the leap into electronic typesetting,
       remaining essentially unchanged. It was popularised in the 1960s with the release of
       Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing
       software like Aldus PageMaker including versions of Lorem Ipsum.
       </p>
       <div className="accueil-cta-wrapper">
        <Link className="cta" to="/articles">Voir les articles ></Link>
       </div>
    </Layout>
  );
}

export default Home;
