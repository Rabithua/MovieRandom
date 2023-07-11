import { useEffect, useState } from "react";
import { randomOneApi } from "../../api/main";
import Typewriter from "typewriter-effect";
import env from "../../env";

function Home() {
  const [movie, setMovie] = useState({
    _id: "",
    Name: "",
    Rate: 0.0,
    Num: 0,
    Link: "https://givemeamovie.cn",
    Time: "0000-00-00",
    Actor: "",
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    randomOneApi()
      .then((data: any) => {
        // 请求成功，处理响应数据
        console.log(data);
        setMovie(data[0]);
        setLoading(false);
      })
      .catch((error) => {
        // 请求失败，处理错误信息
        console.error(error);
        setLoading(false);
      });
  }, []);

  return (
    <div className=" font-mono mx-4 flex h-screen flex-col justify-center items-baseline overflow-hidden relative">
      {movie._id ? (
        <>
          <h1 className=" text-6xl font-black my-2 font-serif text-emerald-600">
            <Typewriter
              options={{
                strings: movie.Name,
                autoStart: true,
                loop: false,
                cursor: "",
              }}
            />
          </h1>
          <div className=" sm:text-4xl text-3xl my-2 flex items-center text-emerald-600 hover:after:content-['(数据收集较早，与实际略有出入)'] hover:after:text-emerald-400 hover:after:text-2xl">
            <Typewriter
              options={{
                strings: `豆瓣评分:${movie.Rate.toString()}`,
                autoStart: true,
                loop: false,
                cursor: "",
                delay: 150,
              }}
            />
          </div>
          <div className=" sm:text-4xl text-3xl my-2 flex items-center  text-emerald-600 hover:after:content-['(数据收集较早，与实际略有出入)'] hover:after:text-emerald-400 hover:after:text-2xl">
            <Typewriter
              options={{
                strings: `豆瓣评分人数:${movie.Num.toString()}`,
                autoStart: true,
                loop: false,
                cursor: "",
                delay: 135,
              }}
            />
          </div>
          <div className=" sm:text-4xl text-3xl my-2 flex items-center  text-emerald-600">
            <Typewriter
              options={{
                strings: `发行日期:${movie.Time}`,
                autoStart: true,
                loop: false,
                cursor: "",
                delay: 95,
              }}
            />
          </div>
          <a
            href={movie.Link}
            target="blank"
            className=" sm:text-4xl text-3xl my-2 duration-300 text-emerald-600 hover:text-emerald-800"
          >
            <Typewriter
              options={{
                strings: "去豆瓣看看",
                autoStart: true,
                loop: false,
                cursor: "⤴",
                delay: 80,
              }}
            />
          </a>
          <a
            href='/'
            className=" sm:text-4xl text-3xl my-2 duration-300 text-emerald-600 hover:text-emerald-800"
          >
            <Typewriter
              options={{
                strings: "再来一个",
                autoStart: true,
                loop: false,
                cursor: "⤴",
                delay: 80,
              }}
            />
          </a>
        </>
      ) : loading ? (
        <div className=" sm:text-4xl text-3xl my-2 flex items-center  text-emerald-600">
          <Typewriter
              options={{
                strings: `Loading...`,
                autoStart: true,
                loop: true,
                cursor: ".",
                delay: 95,
              }}
            />
        </div>
      ) : (
        <div className=" sm:text-4xl text-3xl my-2 flex items-center  text-red-700">
          Oh,backend is dead!!
        </div>
      )}

      <div className=" absolute bottom-0 flex sm:justify-start justify-center w-full text-xl pb-4 font-normal font-mono my-2 text-emerald-600 ">
        <a
          className=" duration-300 hover:text-emerald-800"
          href="https://github.com/Rabithua/MovieRandom"
          target="blank"
        >
          GITHUB ⤴
        </a>
        ｜
        <a
          className=" duration-300 hover:text-emerald-800"
          href={`${env.apiUrl}/randomone`}
          target="blank"
        >
          API ⤴
        </a>
        ｜<div>已收录 9372 条</div>
      </div>
    </div>
  );
}

export default Home;
