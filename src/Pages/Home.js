import axios from "axios";
import React, { useEffect, useState } from "react";
import DJCarteHome from "../Molecules/DJCarteHome";
import ReactLoading from "react-loading";
import { Link, useNavigate } from "react-router-dom";

const Home = () => {
  const [djs, setDjs] = useState([]);
  const [search, setSearch] = useState({ dj: null, state: null });
  const [errMessage, setErrMessage] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    (async () => {
      const responseDjs = await axios.get(
        "http://localhost:5000/dj/getLast10DJ"
      );

      console.log(responseDjs);
      if (responseDjs.data.status === 200) {
        setDjs(responseDjs.data.djs);
      }
    })();
  }, []);
  const submitSearch = () => {
    if (!search.dj && !search.state) {
      setErrMessage(true);
      return;
    }
    navigate(
      `/djs/search/${search.dj ? search.dj : "fill"}/${
        search.state ? search.state : "fill"
      }`
    );
  };
  return (
    <div>
      <div className="top-home">
        <div className="top-home-form-container">
          <p className="top-home-title">Book The Perfect DJ</p>
          <form className="top-home-form">
            <div className="top-home-inputWrapper">
              <div className="top-home-inputContainer">
                <label className="top-home-input-label" htmlFor="service">
                  I'm looking for a
                </label>
                <div className="top-home-inputEL-wrapper">
                  <input
                    onChange={(e) => {
                      setErrMessage(false);
                      setSearch({ ...search, dj: e.target.value });
                    }}
                    name="dj"
                    type={"text"}
                    className="top-home-input"
                    placeholder={"DANCE CLUB DJ ,HOUSE DJ etc..."}
                  />
                </div>
                {errMessage ? <p className="errorMsj">Empty !!!</p> : null}
              </div>
            </div>
            <div className="top-home-inputWrapper">
              <div className="top-home-inputContainer">
                <label className="top-home-input-label" htmlFor="service">
                  My event is in
                </label>
                <div className="top-home-inputEL-wrapper">
                  <input
                    onChange={(e) => {
                      setErrMessage(false);
                      setSearch({ ...search, state: e.target.value });
                    }}
                    name="state"
                    type={"text"}
                    className="top-home-input"
                    placeholder={"City, State"}
                  />
                </div>
                {errMessage ? <p className="errorMsj">Empty !!!</p> : null}
              </div>
            </div>
            {/* <Link to={"/djs/search/:dj/:state"}> */}
            <button
              type={"button"}
              onClick={submitSearch}
              className="top-home-searchBtn"
            >
              SEARCH
            </button>
            {/* </Link> */}
          </form>
        </div>
      </div>
      <div className="mid-home">
        <div className="mid-home-container">
          <div className="mid-home-topSide">
            <p className="mid-home-title">
              Plan, book, celebrate—with confidence
            </p>
            <p className="mid-home-description">
              Find local vendors to bring your celebration to life.
            </p>
          </div>
          <div className="mid-home-bottomSide">
            <div className="mid-home-carte">
              <img
                alt="xx"
                src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTEwIiBoZWlnaHQ9IjkzIiB2aWV3Qm94PSIwIDAgMTEwIDkzIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cGF0aCBkPSJNMzEuOTk0NSA4Mi44MDE1QzYzLjUzNzggMTA2LjY4MiA4Ny4wMDk4IDg0Ljc5OSAxMDQuNDU0IDU2LjQ5OTZDMTE2Ljc5NSAzNi40Nzg3IDEwNy40MjcgMTEuNzg4NSA4Ny4zNDU0IDUuODkzNDRDNjEuMzA0MyAtMS43NTEwMSAyMi42MDE2IC00Ljc2MDUgNi4xNjQxMiAxNC41NDk4Qy0xMC4yNzM0IDMzLjg2IDguODQ5MzQgNjUuMjc5MyAzMS45OTQ1IDgyLjgwMTVaIiBmaWxsPSIjRThGMEFBIi8+CjxwYXRoIGQ9Ik00My4wODU2IDQ5LjI0NDhMMzUuNDc2MiA3Ny42NDM0TDQwLjgzNjkgNzUuNDkxN0M0MS42NjE4IDc1LjE2MDYgNDIuNjA2MyA3NS40MTM3IDQzLjE1NTEgNzYuMTEyOUw0Ni43MjE4IDgwLjY1NjdMNTQuMzMxMiA1Mi4yNThMNDMuMDg1NiA0OS4yNDQ4WiIgZmlsbD0iI0RCRTdGRiIgc3Ryb2tlPSJibGFjayIgc3Ryb2tlLXdpZHRoPSIyIi8+CjxwYXRoIGQ9Ik02Ny44Mjk2IDQ5LjI0NDhMNzUuNDM5IDc3LjY0MzRMNzAuMDc4MyA3NS40OTE3QzY5LjI1MzQgNzUuMTYwNiA2OC4zMDg5IDc1LjQxMzcgNjcuNzYwMSA3Ni4xMTI5TDY0LjE5MzQgODAuNjU2N0w1Ni41ODQgNTIuMjU4TDY3LjgyOTYgNDkuMjQ0OFoiIGZpbGw9IiNEQkU3RkYiIHN0cm9rZT0iYmxhY2siIHN0cm9rZS13aWR0aD0iMiIvPgo8Y2lyY2xlIGN4PSI1NS44NDM0IiBjeT0iMzYuNTAwMSIgcj0iMTkuNSIgZmlsbD0id2hpdGUiIHN0cm9rZT0iYmxhY2siIHN0cm9rZS13aWR0aD0iMiIvPgo8cGF0aCBkPSJNNTMuNDA4NSAxMy42MDg0QzU0LjU3OTEgMTIuNzg5NiA1Ni4xNDQ5IDEyLjgwNTUgNTcuMTQ3OSAxMy42MDQ5TDU3LjE5NiAxMy42NTI5TDU3LjUwNDMgMTMuOTYxMkw1Ny41NjMgMTQuMDE5OUw1Ny42MzA2IDE0LjA2ODJDNTguODkzMSAxNC45NjkgNjAuMjQ2OCAxNS4zNzA4IDYxLjkyOTcgMTUuMDA2OEw2Mi45Njk1IDE0Ljg1NzlMNjMuMDIwNiAxNC44NTA2TDYzLjA3MDYgMTQuODM4QzY0LjQ0MDkgMTQuNDk1IDY1LjgwNTIgMTUuMTc1NiA2Ni4zNzk4IDE2LjQzNzdMNjYuNDU0OCAxNi42MDI1TDY2LjU4MjggMTYuNzMwNUw2Ni43ODIgMTYuOTI5NkM2Ny41NDc2IDE4LjM1NjUgNjguNjk3NiAxOS4wOTYgNzAuMTA3NyAxOS40NTI5TDcxLjE2ODUgMTkuNzU2OEw3MS4xODQ2IDE5Ljc2MTRMNzEuMjAxIDE5Ljc2NTVDNzIuNjgwOCAyMC4xMzYgNzMuNjc1NiAyMS4zMzA5IDczLjY3NTYgMjIuNjQxVjIyLjk0OTNWMjMuMDA0OEw3My42ODE3IDIzLjA2QzczLjg2NDEgMjQuNjk4NSA3NC42MDI5IDI2LjAxMTUgNzUuNzI4MyAyNi45NDkzTDc1Ljc2ODggMjYuOTgzTDc1LjgxMjYgMjcuMDEyM0w3Ni42OTc3IDI3LjYwNDFDNzcuODk0MSAyOC41Nzg0IDc4LjMzNjcgMjkuOTU4MSA3Ny45MDE1IDMxLjM0MjJMNzcuNzgwOSAzMS41ODM1TDc3Ljc1NzYgMzEuNjMwMUw3Ny43MzkyIDMxLjY3ODlDNzcuMTk3OSAzMy4xMTkyIDc3LjE2MzkgMzQuNjcxNiA3Ny45NjEyIDM2LjA2NjlMNzcuOTc4NiAzNi4wOTc0TDc3Ljk5ODIgMzYuMTI2Nkw3OC41ODggMzcuMDA4N0M3OS4yNjc2IDM4LjI5MyA3OS4wNDU4IDM5LjgwNyA3OC4xMDAzIDQwLjg4NjZMNzcuODE0IDQxLjE3MjlDNzYuNzA0IDQyLjI4MyA3Ni4xMDUxIDQzLjY1MzkgNzYuMjk2OCA0NS4zNzY2TDc2LjI5ODUgNDUuMzkyMkw3Ni4zMDA4IDQ1LjQwNzdMNzYuNDUwNCA0Ni40NTI4Qzc2LjU1MjYgNDcuODE5NCA3NS43NjM1IDQ5LjExNDkgNzQuMjkxNiA0OS43MjdMNzQuMjU5NCA0OS43NDAzTDc0LjIyODMgNDkuNzU1OUw3My45NjQyIDQ5Ljg4NzlDNzIuNDUwNyA1MC40NzQ0IDcxLjUyMDYgNTEuNjIyNCA3MC45ODY2IDUyLjg3MjdMNzAuOTYyMSA1Mi45MzAxTDcwLjk0NDkgNTIuOTkwMUw3MC42NDI5IDU0LjA0NDJDNzAuMTY5NyA1NS40MzQ3IDY4Ljg5NDUgNTYuMjY1MiA2Ny40NDQgNTYuMjY1Mkg2Ni45ODE2QzY1LjUzODcgNTYuMjY1MiA2NC4wMTQ4IDU2Ljc5OTggNjMuMDEzMiA1Ny45NzIyTDYyLjI3NDcgNTguNzEwN0M2MS4xOTczIDU5Ljc4ODEgNTkuNjUzMyA2MC4wMzA2IDU4LjMzMyA1OS40MzY5TDU4LjA2NTggNTkuMzAzM0M1Ni42NzkxIDU4LjUyMDIgNTUuMTM2NCA1OC41NTggNTMuNzAzNiA1OS4wOTUzTDUzLjY4MTUgNTkuMTAzNkw1My42NTk5IDU5LjExMjlMNTIuNTgzNiA1OS41NzUzTDUyLjU3NDQgNTkuNTc5M0w1Mi41NjUzIDU5LjU4MzRDNTEuMzIzOCA2MC4xNDY2IDQ5Ljg1MjcgNTkuODQwOSA0OC44OTc2IDU4LjcxNTNMNDguNzk0IDU4LjUwODFMNDguNzIxNCA1OC4zNjI5TDQ4LjYwNjYgNTguMjQ4MkM0Ny41NzU1IDU3LjIxNyA0Ni4yNTcxIDU2LjQxNjUgNDQuNjY3OCA1Ni40MTY1SDQzLjU5MTVDNDIuMDQ1NiA1Ni40MTY1IDQwLjkxIDU1LjQ5NSA0MC41NjIxIDU0LjA5NzRMNDAuNTM1NSA1My45OTAzTDQwLjQ4NjIgNTMuODkxN0w0MC4zNzg2IDUzLjY3NjVDMzkuOTc0NiA1Mi4xOTQgMzkuMDEwMiA1MS4wODE0IDM3LjU3NzIgNTAuMzY2NUwzNy41NTE3IDUwLjM1MzhMMzcuNTI1NiA1MC4zNDI1TDM2LjQ1OTIgNDkuODg0M0MzNS4yMDk0IDQ5LjMxMjYgMzQuNDk2MiA0Ny45MjYzIDM0LjczNDEgNDYuNTAxM0wzNC43NDc3IDQ2LjQxOTVWNDYuMzM2NlY0Ni4wODE5QzM0LjkxNTEgNDQuNDY5OSAzNC41MzQ4IDQzLjE2NTIgMzMuNjQwMiA0MS45MDg0TDMzLjU5MTcgNDEuODQwM0wzMy41MzI2IDQxLjc4MTJMMzIuNzg2OSA0MS4wMzU0QzMxLjkwODMgNDAuMDI5NSAzMS43NDU1IDM4LjU2MzEgMzIuNDA5OSAzNy4yNDA5TDMyLjYxMDUgMzcuMDQwM0wzMi43MDQ4IDM2Ljk0NkwzMi43NzExIDM2LjgzMDNDMzMuNTIzMyAzNS41MTczIDMzLjcwMDIgMzQuMDIwNyAzMy4zMzY1IDMyLjU1MjdMMzMuMzMyMiAzMi41MzUxTDMzLjMyNzIgMzIuNTE3OEwzMy4wMTg5IDMxLjQ0MTVMMzMuMDEyOSAzMS40MjA3TDMzLjAwNjEgMzEuNDAwMkMzMi41MzczIDI5Ljk5NTggMzIuOTc4OSAyOC42NDY4IDM0LjI0NjggMjcuODE2MkwzNC41MDYgMjcuNjg2NkwzNC41NzU5IDI3LjY1MTZMMzQuNjM5NiAyNy42MDYyQzM1Ljk0NCAyNi42NzU0IDM2LjcwNjYgMjUuMzQ4IDM2Ljg5NyAyMy44NDhMMzcuMDQ5OSAyMi43OEwzNy4wNTQxIDIyLjc1MDhMMzcuMDU2NiAyMi43MjE0QzM3LjE2OTkgMjEuMzYzMiAzOC4xNjkyIDIwLjIwNzggMzkuNjgwNSAxOS45NDY4SDM5LjkwODRINDAuMDMxN0w0MC4xNTE0IDE5LjkxNjhDNDEuNTQwNSAxOS41Njg4IDQyLjkwMjMgMTguODM3NiA0My42OTk5IDE3LjQ0MThDNDMuNyAxNy40NDE4IDQzLjcgMTcuNDQxOCA0My43IDE3LjQ0MTdMNDQuMzEwOCAxNi4zNzU1QzQ1LjAwMDggMTUuMjMxOSA0Ni4zOTE3IDE0LjYzNjMgNDcuODIzMyAxNC45OTI2TDQ3Ljk0MjIgMTUuMDIyMkg0OC4wNjQ4SDQ4LjQwOTNDNDkuODA3MyAxNS4zNDE5IDUxLjMxNzcgMTUuMTc2OSA1Mi41MDk5IDE0LjIwOTVMNTMuMzkxMiAxMy42MjAyTDUzLjM5OTkgMTMuNjE0NEw1My40MDg1IDEzLjYwODRaTTcxLjgzMDEgMzYuNDg3M0M3MS44MzAxIDI3LjQ3MDEgNjQuNDU2NCAyMC4wOTkzIDU1LjQ0MjEgMjAuMDk5M0M0Ni40MTIgMjAuMDk5MyAzOS4yMDg1IDI3LjQ4NjIgMzkuMjA4NSAzNi40ODczQzM5LjIwODUgNDUuNTA0MyA0Ni40Mjc4IDUyLjcyMDkgNTUuNDQyMSA1Mi43MjA5QzY0LjQ0NjEgNTIuNzIwOSA3MS44MzAxIDQ1LjUxNDcgNzEuODMwMSAzNi40ODczWiIgZmlsbD0iI0YxRkZGQyIgc3Ryb2tlPSJibGFjayIgc3Ryb2tlLXdpZHRoPSIyIi8+CjxwYXRoIGQ9Ik02My41IDMyTDUzLjE2NjcgNDJMNDkgMzcuNSIgc3Ryb2tlPSJibGFjayIgc3Ryb2tlLXdpZHRoPSIzIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPC9zdmc+Cg=="
              />
              <p className="mid-home-carte-title">Trusted Vendors</p>
              <p className="mid-home-carte-description">
                With verified reviews and thousands of ratings, it's easy to
                book the perfect vendor for all types of events—no matter how
                big or small.
              </p>
            </div>
            <div className="mid-home-carte">
              <img
                alt="yy"
                src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTA5IiBoZWlnaHQ9IjEwMSIgdmlld0JveD0iMCAwIDEwOSAxMDEiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik0xMS4yMSAxNi4zODk3Qy0xNS4wMzg0IDUwLjk3NDEgOS4wMTQzMSA3Ni43MDkgNDAuMTIwNCA5NS44MzQ2QzU2LjI0NjMgMTA1Ljc1IDg4LjE2OTIgOTcuMTY2MiA5OC4wMTM2IDgyLjEwOTVDMTE0LjMwMSA1Ny4xOTkxIDExMS43MjEgMzQuNDExOSA5MC40OTU1IDE2LjM4OTdDNjkuMjcwMSAtMS42MzI0NiAzMC40Njk5IC04Ljk4NjcyIDExLjIxIDE2LjM4OTdaIiBmaWxsPSIjRTNGN0YyIi8+CjxyZWN0IHg9IjI0IiB5PSI3NSIgd2lkdGg9IjM4IiBoZWlnaHQ9IjUwIiByeD0iMyIgdHJhbnNmb3JtPSJyb3RhdGUoLTkwIDI0IDc1KSIgZmlsbD0id2hpdGUiIHN0cm9rZT0iIzAzMTQzRCIgc3Ryb2tlLXdpZHRoPSIyIi8+CjxyZWN0IHg9IjI1IiB5PSI0OCIgd2lkdGg9IjUiIGhlaWdodD0iNDgiIHRyYW5zZm9ybT0icm90YXRlKC05MCAyNSA0OCkiIGZpbGw9IiMwMzE0M0QiLz4KPHBhdGggZD0iTTYwIDI3LjQ0QzY4Ljg4ODkgMjcuNDQgNzIuNDQ0NCAyMy44MTMzIDc0LjIyMjIgMjJDNzYgMjMuODEzMyA3OC42NjY3IDI3LjQ0IDg4IDI3LjQ0Qzg4IDUxLjAxMzMgNzguNjY2NyA1NC42NCA3NC4yMjIyIDU2QzY5Ljc3NzggNTQuNjQgNjAgNTEuMDEzMyA2MCAyNy40NFoiIGZpbGw9IiNEQkU3RkYiIHN0cm9rZT0iIzAzMTQzRCIgc3Ryb2tlLXdpZHRoPSIyIi8+CjxyZWN0IHg9IjI4IiB5PSI2NyIgd2lkdGg9IjcuMzUiIGhlaWdodD0iMyIgZmlsbD0iIzFDMUMxQyIvPgo8cmVjdCB4PSIzOS41NSIgeT0iNjciIHdpZHRoPSI3LjM1IiBoZWlnaHQ9IjMiIGZpbGw9IiMxQzFDMUMiLz4KPHJlY3QgeD0iNTEuMSIgeT0iNjciIHdpZHRoPSI3LjM1IiBoZWlnaHQ9IjMiIGZpbGw9IiMxQzFDMUMiLz4KPHJlY3QgeD0iNjIuNjUiIHk9IjY3IiB3aWR0aD0iNy4zNSIgaGVpZ2h0PSIzIiBmaWxsPSIjMUMxQzFDIi8+CjxwYXRoIGQ9Ik03OC4wNzEgNDAuNDEwMUM3Ny44MDEgMzkuOTU5OCA3Ny40MzE5IDM5LjU3OSA3Ni45OTEgMzkuMjk0M0M3Ni41NjE4IDM5LjAxOCA3Ni4wOTU2IDM4LjgwMzggNzUuNjA2MiAzOC42NTcyQzc1LjMzNjIgMzguNTczOSA3NS4wMDkzIDM4LjQ4NzQgNzQuNjM3IDM4LjM4NzJDNzQuMzM3NSAzOC4zMDM5IDc0LjAxMDUgMzguMjI0OCA3My41MDUzIDM4LjExNzJDNzIuOTgyMiAzOC4wMDc1IDcyLjQ2ODYgMzcuODU1NyA3MS45Njg2IDM3LjY2MzdDNzEuNzI1IDM3LjU2NDYgNzEuNTA4OCAzNy40MDY0IDcxLjM0MDEgMzcuMjA0OUM3MS4yMDE5IDM3LjAyNDYgNzEuMTMzMyAzNi43OTk5IDcxLjE0ODEgMzYuNTczMlYzNi40NzA5QzcxLjE1ODYgMzYuMjc4OSA3MS4yMjYxIDM2LjA5NTQgNzEuMzQwMSAzNS45NDE0QzcxLjU0MjYgMzUuNjk0NiA3MS44MDgzIDM1LjUwOCA3Mi4xMSAzNS40MDE0QzcyLjYwNDYgMzUuMjMzNyA3My4xMjY3IDM1LjE1ODkgNzMuNjQ4OCAzNS4xOEM3NC4wNTM4IDM1LjE4IDc0LjQ1NjcgMzUuMjMyNyA3NC44NDY5IDM1LjMzNkM3NS4xMDYzIDM1LjQwOTkgNzUuMzUxIDM1LjUyOTEgNzUuNTY4MyAzNS42ODczQzc1LjcwNjUgMzUuNzg2NCA3NS44MjQ2IDM1LjkxMTkgNzUuOTE2NCAzNi4wNTQzTDc2LjUwMjggMzYuOTYxM0w3OC4zMiAzNS43OTI4TDc3LjczMzYgMzQuODg1N0M3Ny40OTYzIDM0LjUxNTUgNzcuMTkxNSAzNC4xOTI4IDc2LjgzNSAzMy45MzU0Qzc2LjQxNDIgMzMuNjI5NiA3NS45NDE3IDMzLjM5OTcgNzUuNDQxOCAzMy4yNTczQzc1LjI0NjYgMzMuMjAyNCA3NS4wNDk0IDMzLjE1NzEgNzQuODUwMSAzMy4xMjIzVjMwLjg2SDcyLjY5MDFWMzMuMDc2OUM3Mi4yNTc2IDMzLjEzMTggNzEuODMxNiAzMy4yMjg4IDcxLjQxODEgMzMuMzY4QzcwLjc0NDIgMzMuNiA3MC4xNDUxIDM0LjAxMjQgNjkuNjg3NCAzNC41NTg4TDY5LjY1NzggMzQuNTkzNkM2OS4yNDIzIDM1LjEyMiA2OS4wMDYgMzUuNzY5NiA2OC45ODI4IDM2LjQ0MTRDNjguOTM3NSAzNy4xODA3IDY5LjE1OSAzNy45MTI3IDY5LjYwNjIgMzguNTAzM0w2OS42NDEgMzguNTQ5N0g2OS42NDJDNzAuMDU1NSAzOS4wNTQ5IDcwLjU5MzMgMzkuNDQ1MSA3MS4yMDE5IDM5LjY4MTRDNzEuODA2MiAzOS45MDkyIDcyLjQyNzUgNDAuMDg5NiA3My4wNjAzIDQwLjIyMTRDNzMuNTIyMiA0MC4zMjM3IDczLjgxNjUgNDAuMzk0NCA3NC4wODEyIDQwLjQ3MDNINzQuMTEwN0M3NC40NTM1IDQwLjU1NjggNzQuNzQyNSA0MC42MzQ4IDc0Ljk5MzUgNDAuNzEwOFY0MC43MDk3Qzc1LjI4NTYgNDAuNzk2MiA3NS41NjUxIDQwLjkyMjggNzUuODIyNSA0MS4wODczQzc1Ljk3NTQgNDEuMTg5NiA3Ni4xMDUxIDQxLjMyNDYgNzYuMiA0MS40ODE3Qzc2LjI5ODEgNDEuNjc1OCA3Ni4zNDQ1IDQxLjg5MDkgNzYuMzM1IDQyLjEwODJWNDIuMTU2N0M3Ni4zNDQ1IDQyLjQxOTMgNzYuMjY5NiA0Mi42NzY3IDc2LjEyMiA0Mi44OTRDNzUuOTA2OCA0My4xOTM1IDc1LjYwODQgNDMuNDIxMyA3NS4yNjM1IDQzLjU1Qzc0LjczOTMgNDMuNzUwNCA3NC4xNzkzIDQzLjg0MjEgNzMuNjE5MiA0My44Mkg3My41NTE3QzcyLjk0MzIgNDMuODM5IDcyLjMzOTkgNDMuNzEwMyA3MS43OTE1IDQzLjQ0NzdDNzEuNTE5MyA0My4zMDExIDcxLjI4NzMgNDMuMDkxMiA3MS4xMTMzIDQyLjgzN0w3MC40OTc0IDQxLjk0OUw2OC43MjM0IDQzLjE3OThMNjkuMzM5MyA0NC4wNjc4VjQ0LjA2ODlDNjkuNzE0OCA0NC42MTMxIDcwLjIxNTggNDUuMDU5MyA3MC44MDAxIDQ1LjM2OTNMNzAuODI5NiA0NS4zODNDNzEuNDE2IDQ1LjY2NjcgNzIuMDQ0NiA0NS44NTQ1IDcyLjY5MDEgNDUuOTM2N1Y0OC4xNEg3NC44NTAxVjQ1Ljg4ODNDNzUuMjYwMyA0NS44MTY1IDc1LjY2MjIgNDUuNzAyNiA3Ni4wNDkyIDQ1LjU0NzZDNzYuNzc3IDQ1LjI3MDIgNzcuNDA5OCA0NC43ODcyIDc3Ljg2ODYgNDQuMTU3NUM3OC42MTQyIDQzLjA1MDEgNzguNjk4NiA0MS42MjUyIDc4LjA5MDEgNDAuNDM2N0w3OC4wNzEgNDAuNDEwMVoiIGZpbGw9ImJsYWNrIi8+Cjwvc3ZnPgo="
              />

              <p className="mid-home-carte-title">Free Booking Platform</p>
              <p className="mid-home-carte-description">
                It's free to book and make secure online payments through The
                Bash. Once the booking is confirmed, it's covered by Our
                Guarantee.
              </p>
            </div>
            <div className="mid-home-carte">
              <img
                alt="aa"
                src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iOTgiIGhlaWdodD0iOTYiIHZpZXdCb3g9IjAgMCA5OCA5NiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTIwLjI2NzYgMTMuMDU5N0MxNy44OTk1IDEzLjA1OTcgMTYuNDE5NCAxMC40OTYxIDE3LjYwMzUgOC40NDUyN1Y4LjQ0NTI3QzE4Ljc4NzUgNi4zOTQ0MiAyMS43NDc3IDYuMzk0NDIgMjIuOTMxNyA4LjQ0NTI3VjguNDQ1MjdDMjQuMTE1OCAxMC40OTYxIDIyLjYzNTcgMTMuMDU5NyAyMC4yNjc2IDEzLjA1OTdWMTMuMDU5N1oiIGZpbGw9IiNFOEYwQUEiLz4KPHBhdGggZD0iTTk1LjA0NjkgNzMuNDEyMUMxMDUuNDExIDUwLjcwNzkgODUuMTY3OSA1NC4xNzQxIDg1LjE2NzggMTIuODEyQzg1LjE2NzcgLTcuMTk3MTggMjIuNTc0NSAtMS4wNzE3OCAxMy4zMDM5IDEyLjgxMkMtMi4wMzM1NCAzNS43ODE4IC02LjY4Mzk5IDY0LjczMDEgMTMuMzAzOSA4MS4zNDgzQzMzLjI5MTkgOTcuOTY2NiA4Mi44MDUxIDEwMC4yMzEgOTUuMDQ2OSA3My40MTIxWiIgZmlsbD0iI0RCRTdGRiIvPgo8cGF0aCBkPSJNODMuMDg2OCAyNy42OTU3VjQ0LjIwNjVDODIuMTk5MSA0OS44ODc3IDc3LjU0NzcgNjIuNzQxMyA2Ni4wNDMzIDY4LjcwNjUiIHN0cm9rZT0iYmxhY2siIHN0cm9rZS13aWR0aD0iMiIvPgo8cmVjdCB4PSItMSIgeT0iMSIgd2lkdGg9IjEzLjk3ODMiIGhlaWdodD0iMTYuMTA4NyIgcng9IjMiIHRyYW5zZm9ybT0ibWF0cml4KC0xIDAgMCAxIDI2Ljc2MDcgMjcuNjk1NykiIGZpbGw9IndoaXRlIiBzdHJva2U9ImJsYWNrIiBzdHJva2Utd2lkdGg9IjIiLz4KPHJlY3QgeD0iMjUuNDk5OSIgeT0iNC4xOTU2OCIgd2lkdGg9IjUwLjE5NTciIGhlaWdodD0iNjAuODQ3OCIgcng9IjI1LjA5NzgiIGZpbGw9IndoaXRlIiBzdHJva2U9ImJsYWNrIiBzdHJva2Utd2lkdGg9IjIiLz4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0zNy41NDMgNy40OTgxMUM0MC40NTAxIDE0LjMxMDMgNTEuODA0NiAyNi44NTkxIDczLjk2NjQgMjIuNTU2Nkw3NC43ODI0IDIyLjMyMzNDNzIuMDg4NiAxMS4zNDIzIDYyLjE3OTcgMy4xOTU2OCA1MC4zNjggMy4xOTU2OEM0NS41NDMgMy4xOTU2OCA0MS4wMzU0IDQuNTU1MTMgMzcuMjA3NSA2LjkxMTg5TDM3LjU0MyA3LjQ5ODExWiIgZmlsbD0iI0VCNTc1NyIgZmlsbC1vcGFjaXR5PSIwLjUiLz4KPHJlY3QgeD0iMjUuNDk5OSIgeT0iNC4xOTU2OCIgd2lkdGg9IjUwLjE5NTciIGhlaWdodD0iNjAuODQ3OCIgcng9IjI1LjA5NzgiIHN0cm9rZT0iYmxhY2siIHN0cm9rZS13aWR0aD0iMiIvPgo8Y2lyY2xlIGN4PSI2My4zODAzIiBjeT0iNjkuNzcxOCIgcj0iMy43OTM0OCIgc3Ryb2tlPSJibGFjayIgc3Ryb2tlLXdpZHRoPSIyIi8+CjxwYXRoIGQ9Ik0zNy4yODI1IDcuNDU2NTRDNDAuMzAwNiAxNC4yMDI5IDUyLjA4OSAyNi42MzA1IDc1LjA5NzcgMjIuMzY5NiIgc3Ryb2tlPSJibGFjayIgc3Ryb2tlLXdpZHRoPSIyIi8+CjxjaXJjbGUgY3g9IjM5Ljk0NTUiIGN5PSIzMi40ODkxIiByPSIxLjY2MzA0IiBmaWxsPSIjMUMxQzFDIiBzdHJva2U9ImJsYWNrIiBzdHJva2Utd2lkdGg9IjIiLz4KPGNpcmNsZSBjeD0iNjEuMjQ5OCIgY3k9IjMyLjQ4OTEiIHI9IjEuNjYzMDQiIGZpbGw9IiMxQzFDMUMiIHN0cm9rZT0iYmxhY2siIHN0cm9rZS13aWR0aD0iMiIvPgo8cGF0aCBkPSJNNDAuNDc4MSA0OUM0NC4wMjg5IDUyLjcyODMgNTMuMDQ3NyA1Ny45NDc4IDYwLjcxNzMgNDkiIHN0cm9rZT0iYmxhY2siIHN0cm9rZS13aWR0aD0iMiIvPgo8cGF0aCBkPSJNOTUuMDQ2OSA3NS40MTIxQzEwNS40MTEgNTIuNzA3OSA4NS4xNjc5IDU2LjE3NDEgODUuMTY3OCAxNC44MTJDODUuMTY3NyAtNS4xOTcxOCAyMi41NzQ1IDAuOTI4MjE5IDEzLjMwMzkgMTQuODEyQy0yLjAzMzU0IDM3Ljc4MTggLTYuNjgzOTkgNjYuNzMwMSAxMy4zMDM5IDgzLjM0ODNDMzMuMjkxOSA5OS45NjY2IDgyLjgwNTEgMTAyLjIzMSA5NS4wNDY5IDc1LjQxMjFaIiBmaWxsPSIjREJFN0ZGIi8+CjxwYXRoIGQ9Ik0yMi45NzM2IDc0LjMxNjFMMjIuMTY1NyA3MS44Mjk1QzIxLjkzNTIgNzEuMTIwMSAyMC45MzE1IDcxLjEyMDEgMjAuNzAxIDcxLjgyOTVMMTkuODkzMSA3NC4zMTYxSDE3LjI3ODVDMTYuNTMyNiA3NC4zMTYxIDE2LjIyMjUgNzUuMjcwNiAxNi44MjU5IDc1LjcwOUwxOC45NDEyIDc3LjI0NThMMTguMTMzMiA3OS43MzI0QzE3LjkwMjcgODAuNDQxOCAxOC43MTQ3IDgxLjAzMTcgMTkuMzE4MSA4MC41OTMzTDIxLjQzMzMgNzkuMDU2NUwyMy41NDg2IDgwLjU5MzNDMjQuMTUyIDgxLjAzMTcgMjQuOTY0IDgwLjQ0MTggMjQuNzMzNSA3OS43MzI0TDIzLjkyNTUgNzcuMjQ1OEwyNi4wNDA4IDc1LjcwOUMyNi42NDQyIDc1LjI3MDYgMjYuMzM0MSA3NC4zMTYxIDI1LjU4ODIgNzQuMzE2MUgyMi45NzM2WiIgZmlsbD0iI0I4RDBGRiIgc3Ryb2tlPSIjMUMxQzFDIiBzdHJva2Utd2lkdGg9IjEuNSIvPgo8cGF0aCBkPSJNMzcuMzgyMSA3NC4zMTYxTDM2LjU3NDEgNzEuODI5NUMzNi4zNDM2IDcxLjEyMDEgMzUuMzQgNzEuMTIwMSAzNS4xMDk1IDcxLjgyOTVMMzQuMzAxNSA3NC4zMTYxSDMxLjY4N0MzMC45NDExIDc0LjMxNjEgMzAuNjMwOSA3NS4yNzA2IDMxLjIzNDQgNzUuNzA5TDMzLjM0OTYgNzcuMjQ1OEwzMi41NDE3IDc5LjczMjRDMzIuMzExMiA4MC40NDE4IDMzLjEyMzEgODEuMDMxNyAzMy43MjY2IDgwLjU5MzNMMzUuODQxOCA3OS4wNTY1TDM3Ljk1NyA4MC41OTMzQzM4LjU2MDUgODEuMDMxNyAzOS4zNzI0IDgwLjQ0MTggMzkuMTQxOSA3OS43MzI0TDM4LjMzNCA3Ny4yNDU4TDQwLjQ0OTIgNzUuNzA5QzQxLjA1MjcgNzUuMjcwNiA0MC43NDI1IDc0LjMxNjEgMzkuOTk2NiA3NC4zMTYxSDM3LjM4MjFaIiBmaWxsPSIjQjhEMEZGIiBzdHJva2U9IiMxQzFDMUMiIHN0cm9rZS13aWR0aD0iMS41Ii8+CjxwYXRoIGQ9Ik01MS43OTAzIDc0LjMxNjFMNTAuOTgyMyA3MS44Mjk1QzUwLjc1MTggNzEuMTIwMSA0OS43NDgyIDcxLjEyMDEgNDkuNTE3NyA3MS44Mjk1TDQ4LjcwOTcgNzQuMzE2MUg0Ni4wOTUyQzQ1LjM0OTMgNzQuMzE2MSA0NS4wMzkxIDc1LjI3MDYgNDUuNjQyNiA3NS43MDlMNDcuNzU3OCA3Ny4yNDU4TDQ2Ljk0OTkgNzkuNzMyNEM0Ni43MTk0IDgwLjQ0MTggNDcuNTMxMyA4MS4wMzE3IDQ4LjEzNDggODAuNTkzM0w1MC4yNSA3OS4wNTY1TDUyLjM2NTIgODAuNTkzM0M1Mi45Njg3IDgxLjAzMTcgNTMuNzgwNiA4MC40NDE4IDUzLjU1MDEgNzkuNzMyNEw1Mi43NDIyIDc3LjI0NThMNTQuODU3NCA3NS43MDlDNTUuNDYwOSA3NS4yNzA2IDU1LjE1MDcgNzQuMzE2MSA1NC40MDQ4IDc0LjMxNjFINTEuNzkwM1oiIGZpbGw9IiNCOEQwRkYiIHN0cm9rZT0iIzFDMUMxQyIgc3Ryb2tlLXdpZHRoPSIxLjUiLz4KPHBhdGggZD0iTTY2LjE5ODcgNzQuMzE2MUw2NS4zOTA4IDcxLjgyOTVDNjUuMTYwMyA3MS4xMjAxIDY0LjE1NjYgNzEuMTIwMSA2My45MjYxIDcxLjgyOTVMNjMuMTE4MiA3NC4zMTYxSDYwLjUwMzZDNTkuNzU3NyA3NC4zMTYxIDU5LjQ0NzYgNzUuMjcwNiA2MC4wNTEgNzUuNzA5TDYyLjE2NjMgNzcuMjQ1OEw2MS4zNTgzIDc5LjczMjRDNjEuMTI3OCA4MC40NDE4IDYxLjkzOTggODEuMDMxNyA2Mi41NDMyIDgwLjU5MzNMNjQuNjU4NCA3OS4wNTY1TDY2Ljc3MzcgODAuNTkzM0M2Ny4zNzcxIDgxLjAzMTcgNjguMTg5MSA4MC40NDE4IDY3Ljk1ODYgNzkuNzMyNEw2Ny4xNTA2IDc3LjI0NThMNjkuMjY1OSA3NS43MDlDNjkuODY5MyA3NS4yNzA2IDY5LjU1OTIgNzQuMzE2MSA2OC44MTMzIDc0LjMxNjFINjYuMTk4N1oiIGZpbGw9IiNCOEQwRkYiIHN0cm9rZT0iIzFDMUMxQyIgc3Ryb2tlLXdpZHRoPSIxLjUiLz4KPHBhdGggZD0iTTgwLjYwNzIgNzQuMzE2MUw3OS43OTkyIDcxLjgyOTVDNzkuNTY4NyA3MS4xMjAxIDc4LjU2NTEgNzEuMTIwMSA3OC4zMzQ2IDcxLjgyOTVMNzcuNTI2NiA3NC4zMTYxSDc0LjkxMjFDNzQuMTY2MiA3NC4zMTYxIDczLjg1NiA3NS4yNzA2IDc0LjQ1OTUgNzUuNzA5TDc2LjU3NDcgNzcuMjQ1OEw3NS43NjY4IDc5LjczMjRDNzUuNTM2MyA4MC40NDE4IDc2LjM0ODIgODEuMDMxNyA3Ni45NTE3IDgwLjU5MzNMNzkuMDY2OSA3OS4wNTY1TDgxLjE4MjEgODAuNTkzM0M4MS43ODU2IDgxLjAzMTcgODIuNTk3NSA4MC40NDE4IDgyLjM2NyA3OS43MzI0TDgxLjU1OTEgNzcuMjQ1OEw4My42NzQzIDc1LjcwOUM4NC4yNzc4IDc1LjI3MDYgODMuOTY3NiA3NC4zMTYxIDgzLjIyMTcgNzQuMzE2MUg4MC42MDcyWiIgZmlsbD0iI0I4RDBGRiIgc3Ryb2tlPSIjMUMxQzFDIiBzdHJva2Utd2lkdGg9IjEuNSIvPgo8cGF0aCBkPSJNODIuOTk5IDM5LjA3ODhWNDMuNzQ1NkM4My4wMDA4IDQ0LjE3ODggODIuOTExOSA0NC42MDc2IDgyLjczOCA0NS4wMDQ2QzgyLjU2NDEgNDUuNDAxNSA4Mi4zMDkgNDUuNzU3OSA4MS45ODkxIDQ2LjA1MDhDODEuNjY5MyA0Ni4zNDM2IDgxLjI5MTYgNDYuNTY2NiA4MC44ODA0IDQ2LjcwNTRDODAuNDY5MiA0Ni44NDQyIDgwLjAzMzUgNDYuODk1OCA3OS42MDExIDQ2Ljg1NjhDNzQuODA0OCA0Ni4zMzY2IDcwLjE5NzcgNDQuNzAwOSA2Ni4xNDk4IDQyLjA4MTFDNjIuMzgzOCAzOS42OTI4IDU5LjE5MDkgMzYuNTA2MiA1Ni43OTc4IDMyLjc0NzZDNTQuMTYzNiAyOC42ODk0IDUyLjUyNDMgMjQuMDY5IDUyLjAxMjcgMTkuMjYwN0M1MS45NzM3IDE4LjgzMDUgNTIuMDI0OSAxOC4zOTcgNTIuMTYzMSAxNy45ODc3QzUyLjMwMTIgMTcuNTc4MyA1Mi41MjMyIDE3LjIwMjIgNTIuODE1IDE2Ljg4MzJDNTMuMTA2OCAxNi41NjQyIDUzLjQ2MTkgMTYuMzA5MyA1My44NTc4IDE2LjEzNDhDNTQuMjUzNyAxNS45NjAzIDU0LjY4MTYgMTUuODY5OSA1NS4xMTQ0IDE1Ljg2OTVINTkuNzkwNEM2MC41NDY5IDE1Ljg2MjEgNjEuMjgwMiAxNi4xMjk0IDYxLjg1MzcgMTYuNjIxN0M2Mi40MjczIDE3LjExNCA2Mi44MDE5IDE3Ljc5NzYgNjIuOTA3OCAxOC41NDUxQzYzLjEwNTEgMjAuMDM4NiA2My40NzExIDIxLjUwNSA2My45OTg4IDIyLjkxNjNDNjQuMjA4NSAyMy40NzMxIDY0LjI1MzkgMjQuMDc4MiA2NC4xMjk2IDI0LjY2QzY0LjAwNTMgMjUuMjQxNyA2My43MTY1IDI1Ljc3NTcgNjMuMjk3NCAyNi4xOTg2TDYxLjMxNzkgMjguMTc0MkM2My41MzY4IDMyLjA2ODcgNjYuNzY3NyAzNS4yOTMyIDcwLjY2OTkgMzcuNTA3N0w3Mi42NDk1IDM1LjUzMjFDNzMuMDczMiAzNS4xMTM5IDczLjYwODMgMzQuODI1NiA3NC4xOTEyIDM0LjcwMTZDNzQuNzc0MSAzNC41Nzc1IDc1LjM4MDQgMzQuNjIyOCA3NS45MzgzIDM0LjgzMjFDNzcuMzUyNCAzNS4zNTg3IDc4LjgyMTcgMzUuNzI0IDgwLjMxODEgMzUuOTIxQzgxLjA3NTMgMzYuMDI3NiA4MS43NjY4IDM2LjQwODIgODIuMjYxMSAzNi45OTA1QzgyLjc1NTQgMzcuNTcyNyA4My4wMTggMzguMzE1OSA4Mi45OTkgMzkuMDc4OFoiIGZpbGw9IndoaXRlIiBzdHJva2U9ImJsYWNrIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8cmVjdCB4PSIyNyIgeT0iMzIuMzY5NCIgd2lkdGg9IjM4IiBoZWlnaHQ9IjI4LjMxODUiIHJ4PSI2IiBmaWxsPSIjREJFN0ZGIi8+CjxyZWN0IHg9IjI0IiB5PSIzNC44Njk0IiB3aWR0aD0iMzguNTI2MSIgaGVpZ2h0PSIyNy4zMTg1IiByeD0iMyIgZmlsbD0id2hpdGUiIHN0cm9rZT0iYmxhY2siIHN0cm9rZS13aWR0aD0iMiIvPgo8cGF0aCBkPSJNMjQgMzkuNzcyOEMyNC4yNzc2IDQwLjIwNjcgMzYuODk4OCA0OC4wNjQ5IDQyLjkxMjggNTEuNjgwOUw2Mi41MjYxIDM5Ljc3MjgiIHN0cm9rZT0iYmxhY2siIHN0cm9rZS13aWR0aD0iMiIvPgo8cGF0aCBkPSJNMjguOTU2MSA1My4zNzA3QzI4LjUzNTMgNTMuNzI4NCAyOC40ODQxIDU0LjM1OTUgMjguODQxOCA1NC43ODAzQzI5LjE5OTUgNTUuMjAxMSAyOS44MzA2IDU1LjI1MjMgMzAuMjUxNCA1NC44OTQ2TDI4Ljk1NjEgNTMuMzcwN1pNMzUuOTYwOSA0Ny40MTY2TDI4Ljk1NjEgNTMuMzcwN0wzMC4yNTE0IDU0Ljg5NDZMMzcuMjU2MiA0OC45NDA1TDM1Ljk2MDkgNDcuNDE2NloiIGZpbGw9ImJsYWNrIi8+CjxwYXRoIGQ9Ik01Ni44Njk1IDUzLjM3MDdDNTcuMjkwMyA1My43Mjg0IDU3LjM0MTQgNTQuMzU5NSA1Ni45ODM3IDU0Ljc4MDNDNTYuNjI2MSA1NS4yMDExIDU1Ljk5NSA1NS4yNTIzIDU1LjU3NDIgNTQuODk0Nkw1Ni44Njk1IDUzLjM3MDdaTTQ5Ljg2NDcgNDcuNDE2Nkw1Ni44Njk1IDUzLjM3MDdMNTUuNTc0MiA1NC44OTQ2TDQ4LjU2OTQgNDguOTQwNUw0OS44NjQ3IDQ3LjQxNjZaIiBmaWxsPSJibGFjayIvPgo8L3N2Zz4K"
              />
              <p className="mid-home-carte-title">Top-Rated Service</p>
              <p className="mid-home-carte-description">
                Our US based team of Account Specialists are here to help every
                step of the way. Since 1997, we've connected planners with
                vendors for over half a million events.
              </p>
            </div>
          </div>
          <div className="mid-home-lastSide">
            <p className="mid-home-lastSide-text">
              <b>Why book a DJ?</b> With hundreds of DJs available for events
              throughout all of the U.S. & Canada, The Bash is the place to book
              a DJ for a party. DJ services available for parties, weddings,
              public events and more. Since 1997, The Bash has made booking DJs
              a snap. You've found the top DJ website.
            </p>
          </div>
        </div>
      </div>
      <div className="djsSide-container">
        <div className="djSide-top">
          <p className="djSide-top-title">Top Djs :</p>
          <div className="djSide-top-seeMore">
            <Link className="link-no-style" to={"/djs/all"}>
              {" "}
              <p className="djSide-top-seeMore-text"> See All Djs</p>
            </Link>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="-6 -9 24 24"
              className="arrow-toLEft"
              aria-hidden="false"
            >
              <path
                fill-rule="evenodd"
                d="M371 819L370.491 819.412 365 823.868 366.017 825 371 820.956 375.983 825 377 823.868 371.509 819.412z"
                transform="rotate(-180 188.5 412.5)"
              ></path>
            </svg>
          </div>
        </div>
        <div className="djSide-djList">
          {djs.length > 0 ? (
            djs.map((el) => <DJCarteHome dj={el} />)
          ) : (
            <div className="loaderContainer">
              <ReactLoading
                type={"bubbles"}
                color={"green"}
                height={500}
                width={250}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
