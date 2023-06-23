import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import DotsMenu from "../../assets/three-dots.svg";
import { api } from "../../services/api/api";
import { deletePost } from "../../services/postsServices";
const Dots = styled.img`
  cursor: pointer;
`;

const Menu = styled.div`
  position: absolute;
  width: 200px;
  box-shadow: 6px 5px 15px 5px rgba(0, 0, 0, 0.15);
  right: 0;
  background-color: ${props => props.theme.white};
  z-index: 999;
  display: ${props => (props.show ? "block" : "none")};
`;
const StyledOption = styled.div`
  padding: 15px;
  cursor: pointer;
  color: #6941c6;
  transition: all 0.3s;
  font-family: "Inter";

  :hover {
    background-color: #f8f3f3;
  }
  @media (max-width: 425px) {
    text-align: center;
  }
`;

const StyleContainerMenu = styled.div`
  position: relative;
`;

export const DeleteMenu = ({ idPost }) => {
  const [show, setShow] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const clickOutside = event => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setShow(false);
      }
    };

    document.addEventListener("click", clickOutside, true);

    return () => {
      document.removeEventListener("click", clickOutside, true);
    };
  }, [menuRef]);

  const handleDots = () => {
    setShow(!show);
  };

  const handleDelete = async idPost => {
    const token = localStorage.getItem("@Auth:token");
    console.log("chegou aqui");
    try {
      api.defaults.headers.Authorization = `Bearer ${token}`;

      const res = await deletePost(idPost);
      console.log(res);
    } catch (err) {
      console.log(err.message);
    }
  };

  // const handleClick = onClick => {
  //   setShow(false);
  //   onClick();
  // };
  return (
    <StyleContainerMenu>
      <Dots src={DotsMenu} height="20" onClick={handleDots} />
      <Menu show={show} ref={menuRef} onBlur={() => setShow(false)}>
        <StyledOption onClick={() => handleDelete(idPost)}>
          Deletar Post
        </StyledOption>
      </Menu>
    </StyleContainerMenu>
  );
};
