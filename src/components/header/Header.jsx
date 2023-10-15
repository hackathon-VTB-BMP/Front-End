import styles from "./header.module.css";
import { useState } from "react";
import { Menu, MenuButton, MenuList, MenuItem, Button } from "@chakra-ui/react";
import { ChevronUp, ChevronDown, HelpCircle } from "lucide-react";
import logo from "../../img/logo.png";
import { Quiz } from "../quiz/Quiz.jsx";

const Header = ({ children }) => {
  const [openInfo, setOpenInfo] = useState(false);
  const [quizOpen, setQuizOpen] = useState(false);

  const handleButtonClick = () => {
    setQuizOpen(!quizOpen);
  };

  return (
    <>
      <div className={styles.header}>
        <div className={styles.top_header}>
          <img src={logo} alt="logo" />
        </div>
        <div className={styles.bott_header}>
          <div className={styles.title}>Лучший офис в удобном месте</div>
          <div className={styles.buttons_wrapper}>
            <div className={styles.menu}>
              <Menu>
                <MenuButton as={Button} onClick={() => setOpenInfo(!openInfo)}>
                  <div style={{ display: "flex", gap: "10px" }}>
                    <span>Сортировка по</span>{" "}
                    {openInfo ? <ChevronUp /> : <ChevronDown />}
                  </div>
                </MenuButton>
                <MenuList>
                  <MenuItem>Сначала менее загруженные</MenuItem>
                  <MenuItem>Сначала ближайшие</MenuItem>
                </MenuList>
              </Menu>
            </div>
            <button className={styles.quiz}>
              <div
                style={{
                  display: "flex",
                  gap: "10px",
                  alignItems: "center",
                  justifyContent: "space-around",
                }}
              >
                {quizOpen ? (
                  <>
                    <span onClick={handleButtonClick}>
                      Помощь с выбором отделения
                    </span>
                    <HelpCircle size="24px" />
                    <Quiz setQuizOpen={setQuizOpen} />
                  </>
                ) : (
                  <>
                    <span onClick={handleButtonClick}>
                      Помощь с выбором отделения
                    </span>
                    <HelpCircle size="24px" />
                  </>
                )}
              </div>
            </button>
          </div>
        </div>
      </div>
      <main>{children}</main>
    </>
  );
};

export default Header;
