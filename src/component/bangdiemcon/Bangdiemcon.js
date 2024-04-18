import "./bangdiemcon.scss";
import img from "../../assets/images/VIE.png";
import { useEffect, useState } from "react";
const BandiemCon = () => {
  const [score, setScore] = useState({
    s1: 4,
    s2: 5,
    s3: 3,
    s4: 4,
    s5: 4,
    s6: 4,
    s7: 5,
    s8: 3,
    s9: 5,
    s10: 4,
    s11: 4,
    s12: 5,
    s13: 3,
    s14: 4,
    s15: 4,
    s16: 3,
    s17: 5,
    s18: 4,
  });
  const [scoreUser, setScoreUser] = useState({
    s1: 4,
    s2: 6,
    s3: 4,
    s4: 4,
    s5: 3,
    s6: 5,
    s7: 6,
    s8: 2,
    s9: 4,
    s10: 4,
    s11: 3,
    s12: 5,
    s13: 3,
    s14: 5,
    s15: 5,
    s16: 3,
    s17: 5,
    s18: 4,
  });
  const [toPar, setToPar] = useState(0);
  useEffect(() => {
    setToPar(
      scoreUser.s1 +
        scoreUser.s2 +
        scoreUser.s3 +
        scoreUser.s4 +
        scoreUser.s5 +
        scoreUser.s6 +
        scoreUser.s7 +
        scoreUser.s8 +
        scoreUser.s9 +
        scoreUser.s10 +
        scoreUser.s11 +
        scoreUser.s12 +
        scoreUser.s13 +
        scoreUser.s14 +
        scoreUser.s15 +
        scoreUser.s16 +
        scoreUser.s17 +
        scoreUser.s18 -
        score.s1 -
        score.s2 -
        score.s3 -
        score.s4 -
        score.s5 -
        score.s6 -
        score.s7 -
        score.s8 -
        score.s9 -
        score.s10 -
        score.s11 -
        score.s12 -
        score.s13 -
        score.s14 -
        score.s15 -
        score.s16 -
        score.s17 -
        score.s18
    );
  }, []);

  const Sosanh = (a, b) => {
    if (+a === +b) {
      return "";
    }
    if (+a < +b) {
      return "birdie";
    }
    if (+a >= +b + 2) {
      return "double";
    }

    return "bogey";
  };
  return (
    <div className="bangdiem-chitiet pt-3 px-4">
      <div class="info-golfer-place text-white mb-4">
        <p class="name-golfer text-left">Nguyễn Đức Sơn</p>
        <div class="info-middle">
          <div class="text-center country-place ">
            <div className="logo-img">
              <img src={img} />
            </div>

            <div className="mt-2">VIE</div>
          </div>
          <div class="text-center age-place">
            <div style={{ fontWeight: "900", fontSize: "18px" }}>+4</div>

            <div className="mt-1" style={{ fontSize: "16px" }}>
              SCORE
            </div>
          </div>
        </div>
      </div>
      {/* /// table */}
      <div className="table-responsive">
        <table className="table table-bordered">
          <tbody>
            <tr className="success text-center text-white font-bold">
              <th className="text-center">Hole</th>
              <td>1</td>
              <td>2</td>
              <td>3</td>
              <td>4</td>
              <td>5</td>
              <td>6</td>
              <td>7</td>
              <td>8</td>
              <td>9</td>
              <th>
                <strong>Out</strong>
              </th>
              <td>10</td>
              <td>11</td>
              <td>12</td>
              <td>13</td>
              <td>14</td>
              <td>15</td>
              <td>16</td>
              <td>17</td>
              <td>18</td>
              <th>In</th>
              <th>Total</th>
              <th>To Par</th>
            </tr>
            <tr className="text-center text-white font-bold">
              <td className="text-center">
                <strong>Par</strong>
              </td>

              <td>{score.s1}</td>
              <td>{score.s2}</td>
              <td>{score.s3}</td>
              <td>{score.s4}</td>
              <td>{score.s5}</td>
              <td>{score.s6}</td>
              <td>{score.s7}</td>
              <td>{score.s8}</td>
              <td>{score.s9}</td>
              <td>
                {score.s1 +
                  score.s2 +
                  score.s3 +
                  score.s4 +
                  score.s5 +
                  score.s6 +
                  score.s7 +
                  score.s8 +
                  score.s9}
              </td>
              <td>{score.s10}</td>
              <td>{score.s11}</td>
              <td>{score.s12}</td>
              <td>{score.s13}</td>
              <td>{score.s14}</td>
              <td>{score.s15}</td>
              <td>{score.s16}</td>
              <td>{score.s17}</td>
              <td>{score.s18}</td>
              <td>
                {score.s10 +
                  score.s11 +
                  score.s12 +
                  score.s13 +
                  score.s14 +
                  score.s15 +
                  score.s16 +
                  score.s17 +
                  score.s18}
              </td>
              <td>
                {score.s1 +
                  score.s2 +
                  score.s3 +
                  score.s4 +
                  score.s5 +
                  score.s6 +
                  score.s7 +
                  score.s8 +
                  score.s9 +
                  score.s10 +
                  score.s11 +
                  score.s12 +
                  score.s13 +
                  score.s14 +
                  score.s15 +
                  score.s16 +
                  score.s17 +
                  score.s18}
              </td>
              <td></td>
            </tr>

            <tr className="text-center score text-blue font-bold">
              <td className="text-center">
                <strong>Score</strong>
              </td>
              <td>
                <div className={Sosanh(scoreUser.s1, score.s1)}>
                  {scoreUser.s1}
                </div>
              </td>
              <td>
                <div className={Sosanh(scoreUser.s2, score.s2)}>
                  {scoreUser.s2}
                </div>
              </td>
              <td>
                <div className={Sosanh(scoreUser.s3, score.s3)}>
                  {scoreUser.s3}
                </div>
              </td>
              <td>
                <div className={Sosanh(scoreUser.s4, score.s4)}>
                  {scoreUser.s4}
                </div>
              </td>
              <td>
                <div className={Sosanh(scoreUser.s5, score.s5)}>
                  {scoreUser.s5}
                </div>
              </td>
              <td>
                <div className={Sosanh(scoreUser.s6, score.s6)}>
                  {scoreUser.s6}
                </div>
              </td>
              <td>
                <div className={Sosanh(scoreUser.s7, score.s7)}>
                  {scoreUser.s7}
                </div>
              </td>
              <td>
                <div className={Sosanh(scoreUser.s8, score.s8)}>
                  {scoreUser.s8}
                </div>
              </td>
              <td>
                <div className={Sosanh(scoreUser.s9, score.s9)}>
                  {scoreUser.s9}
                </div>
              </td>
              <td>
                <div className="">
                  {scoreUser.s1 +
                    scoreUser.s2 +
                    scoreUser.s3 +
                    scoreUser.s4 +
                    scoreUser.s5 +
                    scoreUser.s6 +
                    scoreUser.s7 +
                    scoreUser.s8 +
                    scoreUser.s9}
                </div>
              </td>
              <td>
                <div className={Sosanh(scoreUser.s10, score.s10)}>
                  {scoreUser.s10}
                </div>
              </td>
              <td>
                <div className={Sosanh(scoreUser.s11, score.s11)}>
                  {scoreUser.s11}
                </div>
              </td>
              <td>
                <div className={Sosanh(scoreUser.s12, score.s12)}>
                  {scoreUser.s12}
                </div>
              </td>
              <td>
                <div className={Sosanh(scoreUser.s13, score.s13)}>
                  {scoreUser.s13}
                </div>
              </td>
              <td>
                <div className={Sosanh(scoreUser.s14, score.s14)}>
                  {scoreUser.s14}
                </div>
              </td>
              <td>
                <div className={Sosanh(scoreUser.s15, score.s15)}>
                  {scoreUser.s15}
                </div>
              </td>
              <td>
                <div className={Sosanh(scoreUser.s16, score.s16)}>
                  {scoreUser.s16}
                </div>
              </td>
              <td>
                <div className={Sosanh(scoreUser.s17, score.s17)}>
                  {scoreUser.s17}
                </div>
              </td>
              <td>
                <div className={Sosanh(scoreUser.s18, score.s18)}>
                  {scoreUser.s18}
                </div>
              </td>
              <td>
                <div className="">
                  {scoreUser.s10 +
                    scoreUser.s11 +
                    scoreUser.s12 +
                    scoreUser.s13 +
                    scoreUser.s14 +
                    scoreUser.s15 +
                    scoreUser.s16 +
                    scoreUser.s17 +
                    scoreUser.s18}
                </div>
              </td>
              <td>
                <div>
                  {scoreUser.s1 +
                    scoreUser.s2 +
                    scoreUser.s3 +
                    scoreUser.s4 +
                    scoreUser.s5 +
                    scoreUser.s6 +
                    scoreUser.s7 +
                    scoreUser.s8 +
                    scoreUser.s9 +
                    scoreUser.s10 +
                    scoreUser.s11 +
                    scoreUser.s12 +
                    scoreUser.s13 +
                    scoreUser.s14 +
                    scoreUser.s15 +
                    scoreUser.s16 +
                    scoreUser.s17 +
                    scoreUser.s18}
                </div>
              </td>
              <td>
                <div className={toPar > 0 ? "soduong" : "soam"}>
                  {toPar > 0 ? "+" + toPar : toPar}
                </div>
              </td>
            </tr>

            {/* <tr className="score text-center">
              <td className="text-left">
                <strong>Player 1</strong>
              </td>
              <td>
                <input type="number" min="-3" max="8" />{" "}
              </td>
              <td>
                <input type="number" min="-3" max="7" />{" "}
              </td>
              <td>
                <input type="number" min="-3" max="7" />{" "}
              </td>
              <td>
                <input type="number" min="-3" max="7" />{" "}
              </td>
              <td>
                <input type="number" min="-3" max="7" />{" "}
              </td>
              <td>
                <input type="number" min="-3" max="7" />{" "}
              </td>
              <td>
                <input type="number" min="-3" max="7" />{" "}
              </td>
              <td>
                <input type="number" min="-3" max="7" />{" "}
              </td>
              <td>
                <input type="number" min="-3" max="7" />{" "}
              </td>
              <td id="out"></td>
              <td>
                <input type="number" min="-3" max="7" />{" "}
              </td>
              <td>
                <input type="number" min="-3" max="7" />{" "}
              </td>
              <td>
                <input type="number" min="-3" max="7" />{" "}
              </td>
              <td>
                <input type="number" min="-3" max="7" />{" "}
              </td>
              <td>
                <input type="number" min="-3" max="7" />{" "}
              </td>
              <td>
                <input type="number" min="-3" max="8" />{" "}
              </td>
              <td>
                <input type="number" min="-3" max="7" />{" "}
              </td>
              <td>
                <input type="number" min="-3" max="7" />{" "}
              </td>
              <td>
                <input type="number" min="-3" max="8" />{" "}
              </td>
              <td id="in"></td>
              <td id="total"></td>
            </tr> */}
          </tbody>
        </table>
      </div>
      <div className="text-white pb-3">
        <span className="s1 text-xs font-semibold ml-5">Eagle or Better</span>
        <span className="s2 text-xs font-semibold ml-9">Birdie</span>
        <span className="s3 text-xs font-semibold ml-9">Bogey</span>
        <span className="s4 text-xs font-semibold ml-9">Double Bogey +</span>
      </div>
    </div>
  );
};

export default BandiemCon;
