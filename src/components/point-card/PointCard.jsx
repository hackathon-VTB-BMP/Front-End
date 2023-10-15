import { useState } from "react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import { Clock4, ChevronUp, ChevronDown, Percent, Phone } from "lucide-react";
import styles from "./point-card.module.css";
import { tags } from "../../utils/tags";

const PointCard = ({ dataProps, addRoute, userLocation, onClose }) => {
  const [openInfo, setOpenInfo] = useState(false);

  const handleClick = () => {
    addRoute(userLocation, [dataProps.latitude, dataProps.longitude]);
    onClose();
  };

  console.log(userLocation);

  return (
    <>
      <div className={styles.name}>
        {dataProps.name ? dataProps.name : "Банкомат"}
      </div>
      <div className={styles.address}>{dataProps.address}</div>
      <div className={styles.time_wrapper}>
        <div className={styles.logo}>
          <Clock4 color="#4cc864" size="16px" />
        </div>
        <div className={styles.time}>Открыто до 22:00</div>
      </div>
      <div className={styles.gift_wrapper}>
        <Percent color="#4cc864" size="16px" width="20px" />
        <div className={styles.gift_info}>
          Такой карты ещё не было! <br /> Бесплатное обслуживание и выгодный
          кэшбек
        </div>
      </div>
      <button className={styles.button_wrapper}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="15"
          height="14"
          viewBox="0 0 15 14"
          fill="none"
        >
          <path
            d="M11 2.33337L8.66667 4.66671H10.4167V8.75004C10.4167 9.39171 9.89167 9.91671 9.25 9.91671C8.60833 9.91671 8.08333 9.39171 8.08333 8.75004V4.66671C8.08333 3.37754 7.03917 2.33337 5.75 2.33337C4.46083 2.33337 3.41667 3.37754 3.41667 4.66671V8.75004H1.66667L4 11.0834L6.33333 8.75004H4.58333V4.66671C4.58333 4.02504 5.10833 3.50004 5.75 3.50004C6.39167 3.50004 6.91667 4.02504 6.91667 4.66671V8.75004C6.91667 10.0392 7.96083 11.0834 9.25 11.0834C10.5392 11.0834 11.5833 10.0392 11.5833 8.75004V4.66671H13.3333L11 2.33337Z"
            fill="#0A2896"
          />
        </svg>
        <div className={styles.button_text} onClick={() => handleClick()}>
          Как добраться
        </div>
      </button>

      <div
        className={styles.text_info_wrapper}
        onClick={() => setOpenInfo(!openInfo)}
      >
        <div className={styles.text_info}>Подробнее</div>
        {openInfo ? (
          <ChevronUp size="18px" color="#0a2896" />
        ) : (
          <ChevronDown size="18px" color="#0a2896" />
        )}
      </div>
      {openInfo && (
        <>
          <div className={styles.title_info}>График загруженности</div>
          <Tabs
            className={styles.tabs}
            variant="soft-rounded"
            colorScheme="blue"
          >
            <TabList justifyContent="left">
              <Tab padding={1.5} fontSize="15px" borderRadius={0}>
                ПН
              </Tab>
              <Tab padding={1.5} fontSize="15px" borderRadius={0}>
                ВТ
              </Tab>
              <Tab padding={1.5} fontSize="15px" borderRadius={0}>
                СР
              </Tab>
              <Tab padding={1.5} fontSize="15px" borderRadius={0}>
                ЧТ
              </Tab>
              <Tab padding={1.5} fontSize="15px" borderRadius={0}>
                ПТ
              </Tab>
              <Tab padding={1.5} fontSize="15px" borderRadius={0}>
                СБ
              </Tab>
              <Tab isDisabled padding={1.5} fontSize="15px" borderRadius={0}>
                ВС
              </Tab>
            </TabList>
            <TabPanels padding={0}>
              <TabPanel padding={0}>
                <div className={styles.time_work}>
                  Время работы: с 10:00 до 18:00
                </div>

                <div className={styles.chart}>
                  <div className={styles.chart_hour_wrapper}>
                    <div className={styles.chart_hour}>
                      <div
                        className={styles.chart_hour_fetch}
                        style={{ height: "90%", backgroundColor: "#ff8282" }}
                      ></div>
                    </div>
                    <div className={styles.divider}></div>
                    <div className={styles.number}>10</div>
                  </div>
                  <div className={styles.chart_hour_wrapper}>
                    <div className={styles.chart_hour}>
                      <div
                        className={styles.chart_hour_fetch}
                        style={{ height: "60%", backgroundColor: "#fbd158" }}
                      ></div>
                    </div>
                    <div className={styles.divider}></div>
                    <div className={styles.number}>11</div>
                  </div>
                  <div className={styles.chart_hour_wrapper}>
                    <div className={styles.chart_hour}>
                      <div
                        className={styles.chart_hour_fetch}
                        style={{ height: "30%", backgroundColor: "#4cc864" }}
                      ></div>
                    </div>
                    <div className={styles.divider}></div>
                    <div className={styles.number}>12</div>
                  </div>
                  <div className={styles.chart_hour_wrapper}>
                    <div className={styles.chart_hour}>
                      <div
                        className={styles.chart_hour_fetch}
                        style={{ height: "90%", backgroundColor: "#ff8282" }}
                      ></div>
                    </div>
                    <div className={styles.divider}></div>
                    <div className={styles.number}>13</div>
                  </div>
                  <div className={styles.chart_hour_wrapper}>
                    <div className={styles.chart_hour}>
                      <div
                        className={styles.chart_hour_fetch}
                        style={{ height: "70%", backgroundColor: "#ff8282" }}
                      ></div>
                    </div>
                    <div className={styles.divider}></div>
                    <div className={styles.number}>14</div>
                  </div>
                  <div className={styles.chart_hour_wrapper}>
                    <div className={styles.chart_hour}>
                      <div
                        className={styles.chart_hour_fetch}
                        style={{ height: "10%", backgroundColor: "#4cc864" }}
                      ></div>
                    </div>
                    <div className={styles.divider}></div>
                    <div className={styles.number}>15</div>
                  </div>
                  <div className={styles.chart_hour_wrapper}>
                    <div className={styles.chart_hour}>
                      <div
                        className={styles.chart_hour_fetch}
                        style={{ height: "20%", backgroundColor: "#4cc864" }}
                      ></div>
                    </div>
                    <div className={styles.divider}></div>
                    <div className={styles.number}>16</div>
                  </div>
                  <div className={styles.chart_hour_wrapper}>
                    <div className={styles.chart_hour}>
                      <div
                        className={styles.chart_hour_fetch}
                        style={{ height: "40%", backgroundColor: "#fbd158" }}
                      ></div>
                    </div>
                    <div className={styles.divider}></div>
                    <div className={styles.number}>17</div>
                  </div>
                </div>

                <div className={styles.time_wait_wrapper}>
                  <div className={styles.time_wait}>Время ожидания</div>
                  <div
                    className={styles.time_info_wrapper}
                    style={{ display: "flex" }}
                  >
                    <div className={styles.wait5}>
                      <svg
                        width="8"
                        height="8"
                        viewBox="0 0 8 8"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M0 2C0 0.895431 0.895431 0 2 0H6C7.10457 0 8 0.895431 8 2V6C8 7.10457 7.10457 8 6 8H2C0.895431 8 0 7.10457 0 6V2Z"
                          fill="#8EC26A"
                        />
                      </svg>
                      <div className={styles.time_text}>{"< 5 мин"}</div>
                    </div>
                    <div className={styles.wait15}>
                      <svg
                        width="8"
                        height="8"
                        viewBox="0 0 8 8"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M0 2C0 0.895431 0.895431 0 2 0H6C7.10457 0 8 0.895431 8 2V6C8 7.10457 7.10457 8 6 8H2C0.895431 8 0 7.10457 0 6V2Z"
                          fill="#FBD158"
                        />
                      </svg>

                      <div className={styles.time_text}>15-30 мин</div>
                    </div>
                    <div className={styles.wait30}>
                      <svg
                        width="8"
                        height="8"
                        viewBox="0 0 8 8"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M0 2C0 0.895431 0.895431 0 2 0H6C7.10457 0 8 0.895431 8 2V6C8 7.10457 7.10457 8 6 8H2C0.895431 8 0 7.10457 0 6V2Z"
                          fill="#FF8282"
                        />
                      </svg>

                      <div className={styles.time_text}>{"> 30 мин"}</div>
                    </div>
                  </div>
                </div>
                <div className={styles.title_info}>Возможности</div>
                {tags.map((el, index) => (
                  <div key={index} className={styles.tags}>
                    {el}
                  </div>
                ))}
                <div className={styles.title_info}>Контакты</div>
                <div className={styles.contacts_wrapper}>
                  <Phone size="14px" color="#0a2896" />
                  <div className="contacts_text">8 800 200 80 80</div>
                </div>
              </TabPanel>
              <TabPanel>
                <div className={styles.time_work}>
                  Время работы: с 10:00 до 18:00
                </div>

                <div className={styles.chart}>
                  <div className={styles.chart_hour_wrapper}>
                    <div className={styles.chart_hour}>
                      <div
                        className={styles.chart_hour_fetch}
                        style={{ height: "80%", backgroundColor: "#ff8282" }}
                      ></div>
                    </div>
                    <div className={styles.divider}></div>
                    <div className={styles.number}>10</div>
                  </div>
                  <div className={styles.chart_hour_wrapper}>
                    <div className={styles.chart_hour}>
                      <div
                        className={styles.chart_hour_fetch}
                        style={{ height: "70%", backgroundColor: "#fbd158" }}
                      ></div>
                    </div>
                    <div className={styles.divider}></div>
                    <div className={styles.number}>11</div>
                  </div>
                  <div className={styles.chart_hour_wrapper}>
                    <div className={styles.chart_hour}>
                      <div
                        className={styles.chart_hour_fetch}
                        style={{ height: "10%", backgroundColor: "#4cc864" }}
                      ></div>
                    </div>
                    <div className={styles.divider}></div>
                    <div className={styles.number}>12</div>
                  </div>
                  <div className={styles.chart_hour_wrapper}>
                    <div className={styles.chart_hour}>
                      <div
                        className={styles.chart_hour_fetch}
                        style={{ height: "100%", backgroundColor: "#ff8282" }}
                      ></div>
                    </div>
                    <div className={styles.divider}></div>
                    <div className={styles.number}>13</div>
                  </div>
                  <div className={styles.chart_hour_wrapper}>
                    <div className={styles.chart_hour}>
                      <div
                        className={styles.chart_hour_fetch}
                        style={{ height: "80%", backgroundColor: "#ff8282" }}
                      ></div>
                    </div>
                    <div className={styles.divider}></div>
                    <div className={styles.number}>14</div>
                  </div>
                  <div className={styles.chart_hour_wrapper}>
                    <div className={styles.chart_hour}>
                      <div
                        className={styles.chart_hour_fetch}
                        style={{ height: "40%", backgroundColor: "#4cc864" }}
                      ></div>
                    </div>
                    <div className={styles.divider}></div>
                    <div className={styles.number}>15</div>
                  </div>
                  <div className={styles.chart_hour_wrapper}>
                    <div className={styles.chart_hour}>
                      <div
                        className={styles.chart_hour_fetch}
                        style={{ height: "20%", backgroundColor: "#4cc864" }}
                      ></div>
                    </div>
                    <div className={styles.divider}></div>
                    <div className={styles.number}>16</div>
                  </div>
                  <div className={styles.chart_hour_wrapper}>
                    <div className={styles.chart_hour}>
                      <div
                        className={styles.chart_hour_fetch}
                        style={{ height: "60%", backgroundColor: "#fbd158" }}
                      ></div>
                    </div>
                    <div className={styles.divider}></div>
                    <div className={styles.number}>17</div>
                  </div>
                </div>

                <div className={styles.time_wait_wrapper}>
                  <div className={styles.time_wait}>Время ожидания</div>
                  <div
                    className={styles.time_info_wrapper}
                    style={{ display: "flex" }}
                  >
                    <div className={styles.wait5}>
                      <svg
                        width="8"
                        height="8"
                        viewBox="0 0 8 8"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M0 2C0 0.895431 0.895431 0 2 0H6C7.10457 0 8 0.895431 8 2V6C8 7.10457 7.10457 8 6 8H2C0.895431 8 0 7.10457 0 6V2Z"
                          fill="#8EC26A"
                        />
                      </svg>
                      <div className={styles.time_text}>{"< 5 мин"}</div>
                    </div>
                    <div className={styles.wait15}>
                      <svg
                        width="8"
                        height="8"
                        viewBox="0 0 8 8"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M0 2C0 0.895431 0.895431 0 2 0H6C7.10457 0 8 0.895431 8 2V6C8 7.10457 7.10457 8 6 8H2C0.895431 8 0 7.10457 0 6V2Z"
                          fill="#FBD158"
                        />
                      </svg>

                      <div className={styles.time_text}>15-30 мин</div>
                    </div>
                    <div className={styles.wait30}>
                      <svg
                        width="8"
                        height="8"
                        viewBox="0 0 8 8"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M0 2C0 0.895431 0.895431 0 2 0H6C7.10457 0 8 0.895431 8 2V6C8 7.10457 7.10457 8 6 8H2C0.895431 8 0 7.10457 0 6V2Z"
                          fill="#FF8282"
                        />
                      </svg>

                      <div className={styles.time_text}>{"> 30 мин"}</div>
                    </div>
                  </div>
                </div>
                <div className={styles.title_info}>Возможности</div>
                {tags.map((el, index) => (
                  <div key={index} className={styles.tags}>
                    {el}
                  </div>
                ))}
                <div className={styles.title_info}>Контакты</div>
                <div className={styles.contacts_wrapper}>
                  <Phone size="14px" color="#0a2896" />
                  <div className="contacts_text">8 800 200 80 80</div>
                </div>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </>
      )}
    </>
  );
};

export default PointCard;
