import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
// import { useAuth } from "../Component/store/AuthProvider";
// import Button from "../../Component/Ui/Atoms/button";
import useLocalStorage from "../../hook/useLocalStorage";
import { useCookiesStorage } from "../../hook/useCookiesStorage";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
// import QuoteApp from "../../Component/DragDrop";

// const ButtonDiv = styled.div`
//   width: 30%;
//   display: flex;
//   flex-wrap: nowrap;
//   align-content: center;
//   align-items: center;
// `;

const Wrapper = styled.section`
  padding: 5rem 0;
  .section-hero-data {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .hero-top-data {
    text-transform: uppercase;
    font-weight: 500;
    color: black;
  }
  .hero-heading {
    text-transform: uppercase;
  }
  .hero-para {
    margin-top: 1.5rem;
    margin-bottom: 3.4rem;
    max-width: 60rem;
  }
`;

const WrapperSection = styled.ul`
  list-style: none;
  padding-left: 0;
  user-select: none;
  > li {
    display: flex;
    align-items: center;
    width: 200px;
    border: solid 1px #d0d0d0;
    border-radius: 0.2em;
    padding: 0.5em 0.8em 0.5em 0.5em;
    margin-bottom: 1em;
    background-color: lightblue;
    user-select: none;
    cursor: grab;
  }
  > p {
    max-width: none;
    font-weight: bold;
    margin: 0;
  }
`;

const finalSpaceCharacters = [
  {
    id: "1",
    name: "Gary Goodspeed",
  },
  {
    id: "2",
    name: "Little Cato",
  },
  {
    id: "3",
    name: "KVN",
  },
  {
    id: "4",
    name: "Mooncake",
  },
  {
    id: "5",
    name: "Quinn Ergon",
  },
];

export default function About() {
  // const { userToken, user, logout } = useAuth();
  const navigation = useNavigate();
  const [userLogin, setUserLogin] = useState({});

  const [localUser, setLocalUser] = useLocalStorage("userdata");
  const [appToken, setAppToken] = useCookiesStorage("appToken");
  const [characters, updateCharacters] = useState(finalSpaceCharacters);

  const handleOnDragEnd = (result) => {
    if (!result.destination) return;

    if (result.destination.index === result.source.index) return;

    const items = Array.from(characters);
    const [reorderedItem] = items.splice(result.source.index, 1);

    items.splice(result.destination.index, 0, reorderedItem);

    updateCharacters(items);
  };
  // console.log("_pp test ::", characters);

  useEffect(() => {
    // console.log("_pp test user", !localUser);
    if (!localUser || !appToken) {
      navigation("/login", { replace: true });
    } else setUserLogin(localUser);
  }, [appToken, localUser, navigation]);

  return (
    <>
      <Wrapper>
        <div className="container">
          <div className="section-hero-data">
            <p className="hero-top-data">THIS IS ME</p>
            <h1 className="hero-heading">User Name ::-- {userLogin.name}</h1>
            <p className="hero-para">
              I'm {userLogin.name}. A Full stack Developer, youtuber and
              freelancer. A Full stack Developer, youtuber and freelancer.
            </p>
            {/* <Button className="btn hireme-btn">
              <NavLink to="/contact"> hire me </NavLink>
            </Button> */}
          </div>
          {/* <Button
            bg="#ff0099"
            color="#000"
            label="Logout"
            onClick={() => {
              setLocalUser();
              setAppToken();
              navigation("/login");
            }}
          /> */}
        </div>
      </Wrapper>
      <p className="hero-top-data">drag and drop section</p>

      <div
        style={{
          width: "200px",
          padding: "10px 30px",
          border: "2px solid black",
        }}
      >
        <DragDropContext onDragEnd={handleOnDragEnd}>
          <Droppable droppableId="characters">
            {(provided) => (
              <WrapperSection
                ref={provided.innerRef}
                {...provided.droppableProps}
              >
                {characters.map((en, index) => {
                  return (
                    <Draggable key={en?.id} draggableId={en?.id} index={index}>
                      {(provided) => (
                        <li
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                        >
                          <p>{en.name}</p>
                        </li>
                      )}
                    </Draggable>
                  );
                })}
                {provided?.placeholder}
              </WrapperSection>
            )}
          </Droppable>
        </DragDropContext>
      </div>

      {/* <div>
        <QuoteApp />
      </div> */}

      {/* <div style={{ padding: "10px 0px" }}>
        <h1>This is the About page</h1>
        <h2> user data form the context data and user token {appToken}</h2>

        <div> user name:::{userLogin.name}</div>
        <ButtonDiv>
          <Button
            bg="#ff0099"
            color="#000"
            label="Logout"
            onClick={() => {
              setLocalUser();
              setAppToken();
              navigation("/login");
            }}
          />
        </ButtonDiv>
      </div> */}
    </>
  );
}
