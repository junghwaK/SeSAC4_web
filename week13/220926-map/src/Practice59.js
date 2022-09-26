import React, {useState} from 'react';
import "./Practice59.css";

function Practice59(){
    const [list, setList] = useState([]);
    const [results, setResult] = useState([]);


    function writeList(){
        let form = document.getElementById("form_writer");
        let newList = {
            writer: form.writer.value,
            title: form.title.value

        };
        setList([...list, newList]);

    }


    function searchList(){
        let form = document.getElementById("form_search");

        //select태그에서 내가 선택한거 : writer&title
        let type = form.type.value;
        //input태그에 내가 입력한 검색어
        let search = form.search.value;
        //작성자 기준으로.
        let newList = list.filter((result) => {
            if (result[type].includes(search)) return result;
        });
        setResult(newList);
    }

    return(
        <div>
            <form id="form_writer">
                <input type="text" name="writer" placeholder='작성자'/>
                <input type="text" name="title" placeholder='제목'/>
                <button type='button' onClick={writeList}>작성</button>
            </form>
            <form id="form_search">
                <select name="type">
                    <option value='writer'>작성자</option>
                    <option value='title'>제목</option>
                </select>
                <input type="text" name="search" placeholder='검색어'/>
                <button type='button' onClick={searchList}>검색</button>
            </form>


            <table border={1}>
                <thead>
                    <tr>
                        <th>번호</th>
                        <th>제목</th>
                        <th>작성자</th>
                    </tr>
                </thead>
                <tbody>
                    {list.map((value,i) => {
                        return(
                            <tr>
                                <th>{i+1}</th>
                                <th>{value.title}</th>
                                <th>{value.writer}</th>
                            </tr>
                        )
                    })}
                </tbody>
            </table>

            {
                results.length > 0 ?
                (
                    <div>
                        <h4>검색 결과</h4>
                        <table border={1}>
                            <thead>
                                <tr>
                                    <th>번호</th><th>제목</th><th>작성자</th>
                                </tr>
                            </thead>
                            <tbody>
                                {results.map((value, i) => {
                                    // value = { writer: ~~ , title~~ };
                                    return ( 
                                        <tr>
                                            <td>{i+1}</td>
                                            <td>{value.title}</td>
                                            <td>{value.writer}</td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </table>
                    </div>
                ) : (
                    <h5>검색 결과가 없습니다.</h5>
                )
            }
            
        </div>
    )
}


export default Practice59;