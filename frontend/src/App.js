import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
import "./App.css";

import Comment from "./components/Comment";
import Form from "./components/Form";

const GET_COMMENTS = gql`
  query {
    getComments {
      id
      name
      content
    }
  }
`;

export default function App() {
  const { loading, error, data } = useQuery(GET_COMMENTS);

  if (error) return "Erro ao carregar dados.";

  return (
    <>
      <h1>Comentários</h1>
      <Form/>
      {loading ? (
        "Carregando..."
      ) : (
        <section className="comments">
          {data.getComments.map(({ id, name, content }) => (
            <Comment
              key={id}
              id={id}
              name={name}
              description={content}
            />
          ))}
        </section>
      )}
    </>
  );
}