import { useParams } from "react-router-dom";
import { Slide } from "react-slideshow-image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faChevronRight,
    faChevronLeft,
    faCircle,
    faPhone
} from "@fortawesome/free-solid-svg-icons";
import { LuDot } from "react-icons/lu";
import { AiOutlineHeart } from "react-icons/ai";
import { IBadroom, IBedroom } from "../../common/icons";
import "./index.css";
import "react-slideshow-image/dist/styles.css";

import {
    addressIcon,
    contactIcon,
    infoIcon,
    ownerIcon,
    phoneIcon,

} from "../../assets/icons";
import avatarImg from '../../assets/avatar.png'
const sliderButtonStyle = {
    display: "flex",
    width: "40px",
    height: "40px",
    justifyContent: "center",
    alignItems: "center",
    background: "#fff",
    borderRadius: "50%",
    border: "0px",
    color: "#4FAE5A",
    margin: "10px",
};
const slideProperties = {
    prevArrow: (
        <button style={{ ...sliderButtonStyle }}>
            <FontAwesomeIcon icon={faChevronLeft} />
        </button>
    ),
    nextArrow: (
        <button style={{ ...sliderButtonStyle }}>
            <FontAwesomeIcon icon={faChevronRight} />
        </button>
    ),
};

export default function PostDetail() {
    const { postId } = useParams();
    const images = [
        "https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
        "https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80",
        "https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
    ];
    return (
        <div className="main-box">
            <div className="left-box">
                <div
                    style={{ color: "#499DFF", fontWeight: "600", marginBottom: "20px" }}
                >
                    Nhà riêng &emsp;&gt;&emsp;Hà Nội&emsp;&gt;&emsp;Quận Long Biên
                </div>
                <div className="post-detail">
                    <div style={{ position: "relative" }}>
                        <Slide
                            {...slideProperties}
                            indicators={(index) => (
                                <div className="indicator">
                                    <FontAwesomeIcon icon={faCircle} />
                                </div>
                            )}
                            scale={1.4}
                        >
                            <div className="each-slide-effect">
                                <div style={{ backgroundImage: `url(${images[0]})` }}>
                                    <span>Slide 1</span>
                                </div>
                            </div>
                            <div className="each-slide-effect">
                                <div style={{ backgroundImage: `url(${images[1]})` }}>
                                    <span>Slide 2</span>
                                </div>
                            </div>
                            <div className="each-slide-effect">
                                <div style={{ backgroundImage: `url(${images[2]})` }}>
                                    <span>Slide 3</span>
                                </div>
                            </div>
                        </Slide>
                    </div>
                    <div style={{ marginTop: "10px" }}>
                        <p
                            style={{
                                fontSize: "16px",
                                fontWeight: "700",
                                textTransform: "uppercase",
                            }}
                        >
                            Cho thuê villa giá rẻ vinhomes ocean park 2pn - 66 m² từ 7.5tr/th
                            chung cư dt 150m2 100tr/th 0392 170 ***
                        </p>
                        <p
                            style={{
                                fontSize: "12px",
                                fontWeight: "500",
                            }}
                        >
                            Đã đăng vào 23:47 ngày 24/11/2023
                        </p>
                        <div className="mt-2 mx-3">
                            <div className="d-inline-block fw-bold text-danger">
                                10 triệu/tháng
                                <LuDot className="mx-1" />
                                100 m<sup>2</sup>
                            </div>
                            <div className="d-inline-block ms-4">
                                2 <IBedroom />
                                <LuDot className="mx-1" />
                                3 <IBadroom />
                                <LuDot className="mx-1" />
                            </div>
                            <AiOutlineHeart
                                className="text-danger ms-4"
                                style={{ cursor: "pointer" }}
                            />
                        </div>
                        <div className="content-title" style={{ background: "none" }}>
                            <img alt="img" src={addressIcon}></img>
                            <p className="mb-0">
                                Địa chỉ: Vinhomes Ocean Park, Đa Tốn, Gia Lâm, Hà Nội.
                            </p>
                        </div>
                    </div>
                    <div className="content">
                        <div className="content-title">
                            <img alt="img" src={infoIcon}></img>
                            <p className="mb-0">Thông tin chi tiết</p>
                        </div>
                        <div>
                            <p
                                style={{ fontSize: "14px", fontWeight: "500", padding: "10px" }}
                            >
                                Chính chủ Cho thuê căn hộ dịch vụ full nội thất mặt phố ngõ 59
                                Khúc Thừa Dụ, Dịch Vọng, Cầu Giấy. Đường rộng 2 ô tô tránh nhau.
                                Toà nhà với nhiều loại DT căn hộ cho thuê, cho thuê cả ngắn hạn
                                và dài hạn.
                                <ul>
                                    <li>View mặt tiền phố đi bộ</li>
                                    <li>Phòng trọ riêng biệt cho từng sàn</li>
                                    <li>
                                        Điện, nước riêng biệt phí thoả thuận Nấu ăn, giặt phơi tầng
                                        thượng
                                    </li>
                                    <li>
                                        Giá cụ thể từng phòng theo tầng: tầng 2: 4.1 tr, t3: 3.9 tr,
                                        t4: 3.7 tr, t5 3.5 tr
                                    </li>
                                </ul>
                            </p>
                        </div>
                    </div>
                    <div className="content">
                        <div className="content-title mb-3">
                            <img alt="img" src={contactIcon}></img>
                            <p className="mb-0">Thông tin liên hệ</p>
                        </div>
                        <div>
                            <div className="content mt-0">
                                <div
                                    className="content-title mx-3"
                                    style={{ background: "none" }}
                                >
                                    <img alt="img" src={ownerIcon}></img>
                                    <p className="mb-0">Chủ sở hữu: Phạm Kim Huệ</p>
                                </div>
                            </div>
                            <div className="content mt-0">
                                <div
                                    className="content-title mx-3"
                                    style={{ background: "none" }}
                                >
                                    <img alt="img" src={phoneIcon}></img>
                                    <p className="mb-0">Điện thoại: 0392.170.595</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="content">
                        <div
                            className="content-title"
                        >
                            <img alt="img" src={contactIcon}></img>
                            <p className="mb-0">Bản đồ</p>
                        </div>
                        <p style={{ fontSize: '14px', fontWeight: '500', marginTop: '10px' }}>Địa chỉ: Vinhomes Ocean Park, Đa Tốn, Gia Lâm, Hà Nội.</p>
                        <iframe title="maps" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.9827973675438!2d105.86596167503045!3d20.99332668064719!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ac1b37f15f39%3A0xa1caa9bd661382b1!2zVGltZXMgQ2l0eSBUMTEsIDQ1OCBQLiBNaW5oIEtoYWksIEtodSDEkcO0IHRo4buLIFRpbWVzIENpdHksIEhhaSBCw6AgVHLGsG5nLCBIw6AgTuG7mWksIFZp4buHdCBOYW0!5e0!3m2!1svi!2s!4v1702575354249!5m2!1svi!2s" width="100%" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>
            </div>
            <div className="right-box mt-5 ">
                <div className="box-border owner-info">
                    <img alt="img" src={avatarImg} className="mt-3" style={{ width: '100px', borderRadius: '50%' }}></img>
                    <p className="mt-3">Hoàng Mạnh Hùng</p>
                    <div className="phone-info mb-2"><FontAwesomeIcon icon={faPhone} /><span>0392170595</span></div>
                </div>
                <div className="box-border mt-4 ">
                    <p style={{ fontSize: '20px', fontWeight: '700' }}>Tin nổi bật</p>
                    <div className="hot-news">
                        <img alt="img" className="right-img" src="https://cdn.thuvienphapluat.vn/tintuc/uploads/image/2018/10/18/canhochungcu.jpg"></img>
                        <div>
                            <div className="text-overflow mb-1" style={{ fontSize: '14px', fontWeight: '400', color: '#499DFF' }}>Chính chủ cho thuê phòng trọ
                                view mặt đường fdfds dsfsdf cho thuê phòng trọ cho thuê phòng trọ cho thuê phòng trọ</div>
                            <div className="hotnews-price">
                                <p style={{ fontSize: '14px', fontWeight: '500', color: '#4FAE5A' }}>10 triệu/tháng</p>
                                <p style={{ fontSize: '12px', fontWeight: '400', color: '#737373' }}>Hôm nay</p>
                            </div>
                        </div>
                    </div>
                    <div className="hot-news">
                        <img alt="img" className="right-img" src="https://cdn.thuvienphapluat.vn/tintuc/uploads/image/2018/10/18/canhochungcu.jpg"></img>
                        <div>
                            <div className="text-overflow mb-1" style={{ fontSize: '14px', fontWeight: '400', color: '#499DFF' }}>Chính chủ cho thuê phòng trọ
                                view mặt đường fdfds dsfsdf cho thuê phòng trọ cho thuê phòng trọ cho thuê phòng trọ</div>
                            <div className="hotnews-price">
                                <p style={{ fontSize: '14px', fontWeight: '500', color: '#4FAE5A' }}>10 triệu/tháng</p>
                                <p style={{ fontSize: '12px', fontWeight: '400', color: '#737373' }}>Hôm nay</p>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="box-border mt-4 ">
                    <p style={{ fontSize: '20px', fontWeight: '700' }}>Kết quả tương tự</p>
                    <div className="hot-news">
                        <img alt="img" className="right-img" src="https://cdn.thuvienphapluat.vn/tintuc/uploads/image/2018/10/18/canhochungcu.jpg"></img>
                        <div>
                            <div className="text-overflow mb-1" style={{ fontSize: '14px', fontWeight: '400', color: '#499DFF' }}>Chính chủ cho thuê phòng trọ
                                view mặt đường fdfds dsfsdf cho thuê phòng trọ cho thuê phòng trọ cho thuê phòng trọ</div>
                            <div className="hotnews-price">
                                <p style={{ fontSize: '14px', fontWeight: '500', color: '#4FAE5A' }}>10 triệu/tháng</p>
                                <p style={{ fontSize: '12px', fontWeight: '400', color: '#737373' }}>Hôm nay</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}
