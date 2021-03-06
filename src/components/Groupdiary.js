import React, { Component } from "react";

export default class Groupdiary extends Component {
  render() {
    return (
      <div>
        <div>
          <div
            className="intro-section small"
            style={{ backgroundImage: 'url("images/background.jpeg")' }}
          >
            <div className="container">
              <div className="row align-items-center justify-content-center">
                <div
                  className="col-md-7 mx-auto text-center"
                  data-aos="fade-up"
                >
                  <div className="intro">
                    <h1>Group diary</h1>
                    <p>Home / Group diary</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="site-section pb-0">
            <div className="container">
              <div className="row mb-5 justify-content-center text-center">
                <div className="col-lg-4 mb-3 text-center">
                  <span className="caption">Group diary</span>
                  <h2 className="title-with-line mb-2 text-center" />
                </div>
              </div>
              <div>
                <nav>
                  <div
                    className="nav nav-tabs nav-fill"
                    id="nav-tab"
                    role="tablist"
                  >
                    <a
                      className="nav-item nav-link active"
                      data-toggle="tab"
                      href="#nav-week1"
                      role="tab"
                      aria-controls="nav-week1-tab"
                      aria-selected="true"
                    >
                      Week 1
                    </a>
                    <a
                      className="nav-item nav-link"
                      data-toggle="tab"
                      href="#nav-week2"
                      role="tab"
                      aria-controls="nav-week2-tab"
                      aria-selected="false"
                    >
                      Week 2
                    </a>
                    <a
                      className="nav-item nav-link"
                      data-toggle="tab"
                      href="#nav-week3"
                      role="tab"
                      aria-controls="nav-week3-tab"
                      aria-selected="false"
                    >
                      Week 3
                    </a>
                    <a
                      className="nav-item nav-link"
                      data-toggle="tab"
                      href="#nav-week45"
                      role="tab"
                      aria-controls="nav-week45-tab"
                      aria-selected="false"
                    >
                      Week 4-5
                    </a>
                    <a
                      className="nav-item nav-link"
                      data-toggle="tab"
                      href="#nav-week67"
                      role="tab"
                      aria-controls="nav-week67-tab"
                      aria-selected="false"
                    >
                      Week 6-7
                    </a>
                    <a
                      className="nav-item nav-link"
                      data-toggle="tab"
                      href="#nav-week89"
                      role="tab"
                      aria-controls="nav-week89-tab"
                      aria-selected="false"
                    >
                      Week 8-9
                    </a>
                  </div>
                </nav>
                <div
                  className="tab-content py-3 px-3 px-sm-0"
                  id="nav-tabContent"
                >
                  <div
                    className="tab-pane fade show active"
                    id="nav-week1"
                    role="tabpanel"
                    aria-labelledby="nav-week1-tab"
                  >
                    <table className="table">
                      <thead>
                        <tr>
                          <th>STT</th>
                          <th data-toggle="tooltip" title="M?? s??? sinh vi??n">
                            MSSV
                          </th>
                          <th>H??? t??n</th>
                          <th>C??ng vi???c ???????c giao</th>
                          <th>K???t qu???</th>
                          <th>Ti???n ?????</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td scope="row">1</td>
                          <td>19130002</td>
                          <td>Hu???nh H???u ??n</td>
                          <td>L??n ?? t?????ng cho web nh??m</td>
                          <td>Ho??n th??nh</td>
                          <td>100%</td>
                        </tr>
                        <tr>
                          <td scope="row">2</td>
                          <td>19130003</td>
                          <td>Hu???nh V??n H???u ??n</td>
                          <td>T??m hi???u firebase</td>
                          <td>Ho??n th??nh</td>
                          <td>100%</td>
                        </tr>
                        <tr>
                          <td scope="row">3</td>
                          <td>19130017</td>
                          <td>????? Thanh B??nh</td>
                          <td>T???o t??n mi???n ".tk"</td>
                          <td>Ho??n th??nh</td>
                          <td>100%</td>
                        </tr>
                        <tr>
                          <td scope="row">4</td>
                          <td>19130021</td>
                          <td>L?? Minh Ch??nh</td>
                          <td>T??m ki???m template</td>
                          <td>Ho??n th??nh</td>
                          <td>100%</td>
                        </tr>
                        <tr>
                          <td scope="row">5</td>
                          <td>19130022</td>
                          <td>Nguy???n Minh Ch??u</td>
                          <td>Design tr??n gi???y</td>
                          <td>Ho??n th??nh</td>
                          <td>100%</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  {/* week 2 */}
                  <div
                    className="tab-pane fade"
                    id="nav-week2"
                    role="tabpanel"
                    aria-labelledby="nav-week2-tab"
                  >
                    <table className="table">
                      <thead>
                        <tr>
                          <th>STT</th>
                          <th data-toggle="tooltip" title="M?? s??? sinh vi??n">
                            MSSV
                          </th>
                          <th>H??? t??n</th>
                          <th>C??ng vi???c ???????c giao</th>
                          <th>K???t qu???</th>
                          <th>Ti???n ?????</th>
                        </tr>
                      </thead>
                      <tbody className="mybody">
                        <tr>
                          <td scope="row">1</td>
                          <td>19130002</td>
                          <td>Hu???nh H???u ??n</td>
                          <td>
                            L??n ?? t?????ng cho project nh??m <br />
                            T???o trang web c?? nh??n
                          </td>
                          <td>
                            <a href="http://19130002.tk">
                              <i className="fa fa-link" /> Link web
                            </a>
                          </td>
                          <td>100%</td>
                        </tr>
                        <tr>
                          <td scope="row">2</td>
                          <td>19130003</td>
                          <td>Hu???nh V??n H???u ??n</td>
                          <td>
                            T??m hi???u v??? giao di???n v?? c??c ch???c n??ng c???a project
                            <br />
                            T???o trang web c?? nh??n
                          </td>
                          <td>
                            <a href="http://19130003.tk">
                              <i className="fa fa-link" /> Link web
                            </a>
                          </td>
                          <td>100%</td>
                        </tr>
                        <tr>
                          <td scope="row">3</td>
                          <td>19130017</td>
                          <td>????? Thanh B??nh</td>
                          <td>
                            T???o &amp; c???p nh???t trang Group diary
                            <br />
                            T???o trang web c?? nh??n
                          </td>
                          <td>
                            <a href="http://hci2021group02.tk/groupDiary">
                              <i className="fa fa-link" /> Group diary
                            </a>
                            <br />
                            <a href="http://19130017.tk">
                              <i className="fa fa-link" /> Link web
                            </a>
                          </td>
                          <td>100%</td>
                        </tr>
                        <tr>
                          <td scope="row">4</td>
                          <td>19130021</td>
                          <td>L?? Minh Ch??nh</td>
                          <td>
                            T??m ki???m template project
                            <br />
                            T???o trang web c?? nh??n
                          </td>
                          <td>
                            <a href="http://19130021.tk">
                              <i className="fa fa-link" /> Link web
                            </a>
                          </td>
                          <td>100%</td>
                        </tr>
                        <tr>
                          <td scope="row">5</td>
                          <td>19130022</td>
                          <td>Nguy???n Minh Ch??u</td>
                          <td>
                            T??m hi???u v??? giao di???n v?? c??c ch???c n??ng c???a project
                            <br />
                            T???o trang web c?? nh??n
                          </td>
                          <td>
                            <a href="http://19130022.tk">
                              <i className="fa fa-link" /> Link web
                            </a>
                          </td>
                          <td>100%</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  {/* week 3 */}
                  <div
                    className="tab-pane fade"
                    id="nav-week3"
                    role="tabpanel"
                    aria-labelledby="nav-week3-tab"
                  >
                    <table className="table">
                      <thead>
                        <tr>
                          <th>STT</th>
                          <th data-toggle="tooltip" title="M?? s??? sinh vi??n">
                            MSSV
                          </th>
                          <th>H??? t??n</th>
                          <th>C??ng vi???c ???????c giao</th>
                          <th>K???t qu???</th>
                          <th>Ti???n ?????</th>
                        </tr>
                      </thead>
                      <tbody className="mybody">
                        <tr>
                          <td scope="row">1</td>
                          <td>19130002</td>
                          <td>Hu???nh H???u ??n</td>
                          <td>
                            C???p nh???t groupdiary &amp; t??m hi???u ch???c n??ng c???a
                            project
                          </td>
                          <td>Ho??n th??nh</td>
                          <td>100%</td>
                        </tr>
                        <tr>
                          <td scope="row">2</td>
                          <td>19130003</td>
                          <td>Hu???nh V??n H???u ??n</td>
                          <td>
                            L??n ?? t?????ng x??y d???ng trang Home v?? About c???a nh??m
                          </td>
                          <td>Ho??n th??nh</td>
                          <td>100%</td>
                        </tr>
                        <tr>
                          <td scope="row">3</td>
                          <td>19130017</td>
                          <td>????? Thanh B??nh</td>
                          <td>Ho??n thi???n trang Technical c???a web nh??m</td>
                          <td>
                            <a href="http://hci2021group02.tk/technical">
                              <i className="fa fa-link" /> Technical
                            </a>
                          </td>
                          <td>100%</td>
                        </tr>
                        <tr>
                          <td scope="row">4</td>
                          <td>19130021</td>
                          <td>L?? Minh Ch??nh</td>
                          <td>Ho??n thi???n trang About c???a web nh??m</td>
                          <td>
                            <a href="http://hci2021group02.tk/about">
                              <i className="fa fa-link" /> About
                            </a>
                          </td>
                          <td>100%</td>
                        </tr>
                        <tr>
                          <td scope="row">5</td>
                          <td>19130022</td>
                          <td>Nguy???n Minh Ch??u</td>
                          <td>
                            <ul>Ho??n thi???n trang Home c???a web nh??m</ul>
                          </td>
                          <td>
                            <a href="http://hci2021group02.tk/">
                              <i className="fa fa-link" /> Home
                            </a>
                          </td>
                          <td>100%</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  {/* week 4-5 */}
                  <div
                    className="tab-pane fade"
                    id="nav-week45"
                    role="tabpanel"
                    aria-labelledby="nav-week45-tab"
                  >
                    <table className="table">
                      <thead>
                        <tr>
                          <th>STT</th>
                          <th data-toggle="tooltip" title="M?? s??? sinh vi??n">
                            MSSV
                          </th>
                          <th>H??? t??n</th>
                          <th>C??ng vi???c ???????c giao</th>
                          <th>K???t qu???</th>
                          <th>Ti???n ?????</th>
                        </tr>
                      </thead>
                      <tbody className="mybody">
                        <tr>
                          <td scope="row">1</td>
                          <td>19130002</td>
                          <td>Hu???nh H???u ??n</td>
                          <td>
                            Thi???t k??? ch???c n??ng blog c???a project
                          </td>
                          <td>
                            <a href="https://quanlyanimehci21g2.tk/blog_details">
                              <i className="fa fa-link" /> Blog project
                            </a>
                            <br />
                            
                          </td>
                          <td>100%</td>
                        </tr>
                        <tr>
                          <td scope="row">2</td>
                          <td>19130003</td>
                          <td>Hu???nh V??n H???u ??n</td>
                          <td>
                            Thi???t k??? trang Home c???a project &amp; ch???c n??ng t??m
                            ki???m
                          </td>
                          <td>
                            <a href="https://quanlyanimehci21g2.tk">
                              <i className="fa fa-link" /> Home project
                            </a>
                          </td>
                          <td>100%</td>
                        </tr>
                        <tr>
                          <td scope="row">3</td>
                          <td>19130017</td>
                          <td>????? Thanh B??nh</td>
                          <td>
                            Chuy???n web nh??m sang react <br />
                            Hi???n th???c ch???c n??ng login c???a project
                          </td>
                          <td>
                            <a href="https://hci2021group02.tk">
                              <i className="fa fa-link" /> Web nh??m
                            </a>
                            <br />
                            <a href="https://quanlyanimehci21g2.tk/login">
                              <i className="fa fa-link" /> Login
                            </a>
                          </td>
                          <td>100%</td>
                        </tr>
                        <tr>
                          <td scope="row">4</td>
                          <td>19130021</td>
                          <td>L?? Minh Ch??nh</td>
                          <td>
                            L??n ?? t?????ng cho project: m??u s???c, font ch???, b??? c???c
                            <br />
                            T??m ki???m h??nh ???nh &amp; thi???t k???t trang category
                          </td>
                          <td>
                            Ho??n th??nh
                            <br />
                            <a href="https://quanlyanimehci21g2.tk/category">
                              <i className="fa fa-link" /> Category
                            </a>
                          </td>
                          <td>100%</td>
                        </tr>
                        <tr>
                          <td scope="row">5</td>
                          <td>19130022</td>
                          <td>Nguy???n Minh Ch??u</td>
                          <td>
                            Hi???n th???c trang anime-details c???a project
                            <br />
                            Hi???n th???c trang anime-watching c???a project
                          </td>
                          <td>
                            
                            <a href="https://quanlyanimehci21g2.tk/anime_watches">
                              <i className="fa fa-link" /> Watching
                            </a>
                          </td>
                          <td>100%</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  {/* week 6-7 */}
                  <div
                    className="tab-pane fade"
                    id="nav-week67"
                    role="tabpanel"
                    aria-labelledby="nav-week67-tab"
                  >
                    <table className="table">
                      <thead>
                        <tr>
                          <th>STT</th>
                          <th data-toggle="tooltip" title="M?? s??? sinh vi??n">
                            MSSV
                          </th>
                          <th>H??? t??n</th>
                          <th>C??ng vi???c ???????c giao</th>
                          <th>K???t qu???</th>
                          <th>Ti???n ?????</th>
                        </tr>
                      </thead>
                      <tbody className="mybody">
                        <tr>
                          <td scope="row">1</td>
                          <td>19130002</td>
                          <td>Hu???nh H???u ??n</td>
                          <td>Ho??n thi???n trang result c???a web nh??m</td>
                          <td>
                            <a href="https://hci2021group02.tk/result">
                              <i className="fa fa-link" /> Result
                            </a>
                          </td>

                          <td>100%</td>
                        </tr>
                        <tr>
                          <td scope="row">2</td>
                          <td>19130003</td>
                          <td>Hu???nh V??n H???u ??n</td>
                          <td>
                            ??i???u h?????ng c??c trang, chia Header, Footer cho web
                            nh??m
                            <br />
                            ??i???u h?????ng c??c trang, chia Header, Footer cho
                            project nh??m
                          </td>
                          <td>
                            <a href="https://quanlyanimehci21g2.tk">
                              <i className="fa fa-link" /> Web project
                            </a>
                            <br />
                            <a href="https://hci2021group02.tk">
                              <i className="fa fa-link" /> Web nh??m
                            </a>
                          </td>
                          <td>100%</td>
                        </tr>
                        <tr>
                          <td scope="row">3</td>
                          <td>19130017</td>
                          <td>????? Thanh B??nh</td>
                          <td>
                            C???p nh???t group diary <br />
                            Hi???n th???c ch???c n??ng register c???a project
                          </td>
                          <td>
                            Ho??n th??nh
                            <br />
                            <a href="https://quanlyanimehci21g2.tk/signup">
                              <i className="fa fa-link" /> Register
                            </a>
                          </td>
                          <td>100%</td>
                        </tr>
                        <tr>
                          <td scope="row">4</td>
                          <td>19130021</td>
                          <td>L?? Minh Ch??nh</td>
                          <td>
                            Thi???t k??? project tr??n gi???y &amp; t???ng h???p file
                          </td>
                          <td>Ho??n th??nh</td>
                          <td>100%</td>
                        </tr>
                        <tr>
                          <td scope="row">5</td>
                          <td>19130022</td>
                          <td>Nguy???n Minh Ch??u</td>
                          <td>
                            Thi???t k??? project tr??n gi???y &amp; t???ng h???p file
                          </td>
                          <td>Ho??n th??nh</td>
                          <td>100%</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  {/* week 8-9 */}
                  <div
                    className="tab-pane fade"
                    id="nav-week89"
                    role="tabpanel"
                    aria-labelledby="nav-week89-tab"
                  >
                    <table className="table">
                      <thead>
                        <tr>
                          <th>STT</th>
                          <th data-toggle="tooltip" title="M?? s??? sinh vi??n">
                            MSSV
                          </th>
                          <th>H??? t??n</th>
                          <th>C??ng vi???c ???????c giao</th>
                          <th>K???t qu???</th>
                          <th>Ti???n ?????</th>
                        </tr>
                      </thead>
                      <tbody className="mybody">
                        <tr>
                          <td scope="row">1</td>
                          <td>19130002</td>
                          <td>Hu???nh H???u ??n</td>
                          <td>
                            Ch???c n??ng li??n h??? c???a project <br />
                            Ch???c n??ng qu??n m???t kh???u c???a project
                          </td>
                          <td>
                            <a href="https://quanlyanimehci21g2.tk/contact">
                              <i className="fa fa-link" /> Contact
                            </a>
                            <br />
                            <a href="https://quanlyanimehci21g2.tk/forgotPass">
                              <i className="fa fa-link" /> Forgot Pass
                            </a>
                          </td>
                          <td>100%</td>
                        </tr>
                        <tr>
                          <td scope="row">2</td>
                          <td>19130003</td>
                          <td>Hu???nh V??n H???u ??n</td>
                          <td>Trang project c???a nh??m</td>
                          <td>
                            <a href="https://hci2021group02.tk/project">
                              <i className="fa fa-link" /> Project
                            </a>
                          </td>

                          <td>100%</td>
                        </tr>
                        <tr>
                          <td scope="row">3</td>
                          <td>19130017</td>
                          <td>????? Thanh B??nh</td>
                          <td>Chuy???n project nh??m sang react</td>
                          <td>
                            <a href="https://quanlyanimehci21g2.tk">
                              <i className="fa fa-link" /> Web project
                            </a>
                          </td>
                          <td>100%</td>
                        </tr>
                        <tr>
                          <td scope="row">4</td>
                          <td>19130021</td>
                          <td>L?? Minh Ch??nh</td>
                          <td>T???ng h???p, s???a trang project, web nh??m</td>
                          <td>Ho??n th??nh</td>
                          <td>100%</td>
                        </tr>
                        <tr>
                          <td scope="row">5</td>
                          <td>19130022</td>
                          <td>Nguy???n Minh Ch??u</td>
                          <td>Ho??n thi???n trang Style Guide c???a web nh??m</td>
                          <td>
                            <a href="https://hci2021group02.tk/styleGuide">
                              <i className="fa fa-link" /> Style Guide
                            </a>
                          </td>
                          <td>100%</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
