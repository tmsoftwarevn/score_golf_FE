import "./bangdiemconAdmin.scss";
import img from "../../assets/images/VIE.png";
import { useEffect, useState } from "react";

import NhapDiem from "./NhapDiem";
import { Input } from "antd";
const BandiemConAdmin = () => {
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
      return "bangnhau";
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
    <div className="bangdiem-chitiet pt-3 px-4 mt-2">
      <div className="info-golfer-place text-white mb-4">
        <p className="name-golfer text-left">Nguyễn Đức Sơn</p>
        <div className="info-middle">
          <div className="text-center country-place ">
            <div className="logo-img">
              <img src={img} />
            </div>

            <div className="mt-2">VIE</div>
          </div>
        </div>
      </div>
      {/* /// table */}
      {/* <div className="border-t-red-700 w-full mb-2 bg-blue-600 h-px"></div> */}

      <div class="table-responsive">
        <table className="table table-bordered ">
          <tbody>
            <tr className="text-center text-white font-bold">
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
              {/* <th>
                <strong>Out</strong>
              </th> */}
              <td>10</td>
              <td>11</td>
              <td>12</td>
              <td>13</td>
              <td>14</td>
              <td>15</td>
              <td>16</td>
              <td>17</td>
              <td>18</td>
              {/* <td>In</td> */}
              <td>Total</td>
              <td>To Par</td>
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
              {/* <td>
                {score.s1 +
                  score.s2 +
                  score.s3 +
                  score.s4 +
                  score.s5 +
                  score.s6 +
                  score.s7 +
                  score.s8 +
                  score.s9}
              </td> */}
              <td>{score.s10}</td>
              <td>{score.s11}</td>
              <td>{score.s12}</td>
              <td>{score.s13}</td>
              <td>{score.s14}</td>
              <td>{score.s15}</td>
              <td>{score.s16}</td>
              <td>{score.s17}</td>
              <td>{score.s18}</td>
              {/* <td>
                {score.s10 +
                  score.s11 +
                  score.s12 +
                  score.s13 +
                  score.s14 +
                  score.s15 +
                  score.s16 +
                  score.s17 +
                  score.s18}
              </td> */}
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
                <NhapDiem />
              </td>
              <td>
                <NhapDiem />
              </td>
              <td>
                <NhapDiem />
              </td>
              <td>
                <NhapDiem />
              </td>
              <td>
                <NhapDiem />
              </td>
              <td>
                <NhapDiem />
              </td>
              <td>
                <NhapDiem />
              </td>
              <td>
                <NhapDiem />
              </td>
              <td>
                <NhapDiem />
              </td>
              {/* <td>
                
              </td> */}
              <td>
                <NhapDiem />
              </td>
              <td>
                <NhapDiem />
              </td>
              <td>
                <NhapDiem />
              </td>
              <td>
                <NhapDiem />
              </td>
              <td>
                <NhapDiem />
              </td>
              <td>
                <NhapDiem />
              </td>
              <td>
                <NhapDiem />
              </td>
              <td>
                <NhapDiem />
              </td>
              <td>
                <NhapDiem />
              </td>
              {/* <td>
                
              </td> */}
              <td>
                
              </td>
              <td>
                
              </td>
            </tr>
          </tbody>
        </table>

       
      </div>
    </div>
  );
};

export default BandiemConAdmin;
