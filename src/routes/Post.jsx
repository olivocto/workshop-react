import React from 'react';
import Layout from '../components/Layout/Layout'
import Form from '../components/Form/Form'

const PostPage = () => {

  return (
    <Layout>
      <h1>Publier un article</h1>
      <div className="form-wrapper">
        <Form />
      </div>
    </Layout>
  
  );
}

export default PostPage;
