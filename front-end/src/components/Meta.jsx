import { Helmet } from 'react-helmet-async';

const Meta = ({ title, description, keywords }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name='description' content={description} />
      <meta name='keyword' content={keywords} />
    </Helmet>
  );
};

Meta.defaultProps = {
  title: 'Welcome To Chorley Chilli',
  description: 'Tasty spices at tasty prices',
  keywords: 'Hot sauce, chilli, spices, chilli sauce',
};

export default Meta;