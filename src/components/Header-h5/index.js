import React, { Fragment, useMemo } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { userLogin, userLoginOut } from "@/reducers/header/actions";
import styles from "./Header.css";
import { helper } from "@/utils";

const Header = props => {
  const { isLogin } = props.state;
  // console.log('window', window)
  const withStyle = useMemo(() => {
    console.log("header-css");
    helper.withStyle(props, styles);
  }, []);

  const handleLogin = () => {
    props.dispatch(userLogin());
  };

  const handleLoginOut = () => {
    props.dispatch(userLoginOut());
  };

  return (
    <div className={styles.test}>
      <div>12123</div>
      <Link to={"/"}>首页</Link>
      <br />
      {!isLogin ? (
        <Fragment>
          <div onClick={() => handleLogin()}>登录</div>
        </Fragment>
      ) : (
        <Fragment>
          <Link to={"/translation"}>列表</Link>
          <div onClick={() => handleLoginOut()}>退出</div>
        </Fragment>
      )}
    </div>
  );
};

const mapState = state => ({
  state: state.header
});

export default connect(mapState, null)(Header);
