import React, { useState, useContext, createContext } from "react";
import { Container, Content, Entities, Feature, FeatureClose, FeatureText, FeatureTitle, Group, Image, Item, Maturity, Meta, SubTitle, Text, Title } from "./styles/card";

export const FeatureContext = createContext();

export default function Card({ children }) {
  const [showFeature, setShowFeature] = useState(false);
  const [itemFeature, setItemFeature] = useState({});
  return (
    <FeatureContext.Provider
      value={{showFeature, setShowFeature, itemFeature, setItemFeature}}
    >
      <Container>{children}</Container>
    </FeatureContext.Provider>
  );
}

Card.Group = ({ children }) => {
  return <Group>{children}</Group>;
};


Card.Title = ({ children }) => {
    return <Title>{children}</Title>;
  };

  
Card.SubTitle = ({ children }) => {
    return <SubTitle>{children}</SubTitle>;
  };

  
Card.Text = ({ children }) => {
    return <Text>{children}</Text>;
  };

  
Card.Meta = ({ children }) => {
    return <Meta>{children}</Meta>;
  };

  Card.Item = function CardItem({children, item, ...restProps}){
      const { setShowFeature, setItemFeature} = useContext(FeatureContext)

      return <Item onClick={() => {setItemFeature(item); setShowFeature(true)}}  {...restProps}>{children}</Item>

  }

  Card.Entities = ({ children }) => {
    return <Entities>{children}</Entities>;
  };

  Card.Image = ({ ...restProps }) => {
    return <Image {...restProps}/>;
  };

  Card.Feature = function CardFeature({ children, category, ...restProps }) {
    const {showFeature, setShowFeature, itemFeature} = useContext(FeatureContext)

    return showFeature?  (<Feature src={`/images/${category}/${itemFeature.genre}/${itemFeature.slug}/large.jpg`}>
        <Content>
            <FeatureTitle>{itemFeature.title}</FeatureTitle>
            <FeatureText>{itemFeature.description}</FeatureText>
            <FeatureClose onClick={() => setShowFeature(false)}>
                <img src='/images/icons/close.png' alt='Close'></img>
            </FeatureClose>
        </Content>
    <Group margin='30px 0' flexDirection='row' alignItems='center'>
    <Maturity rating={itemFeature.maturity}>{itemFeature.maturity < 12 ? 'PG' : itemFeature.maturity}</Maturity>
    <FeatureText fontWeight='bold'>{itemFeature.genre.charAt(0).toUpperCase() + itemFeature.genre.slice(1)}</FeatureText>
    </Group>

    </Feature>) : null;
  };
