module.exports = function () {
    var faker = require("faker");
    faker.locale = "zh_CN";
    var _ = require("lodash");
    return {
        people: _.times(100, function (n) {       //100条人类的信息
            return {
                id: n,
                name: faker.name.findName(),
                avatar: faker.internet.avatar()
            }
        }),
        address: _.times(100, function (n) {     //100条住址的信息
            return {
                id: faker.random.uuid(),
                city: faker.address.city(),
                county: faker.address.county()
            }
        }),
        login: {
            callback: "",
            token: "eyJhbGciOiJIUzI1NiJ9.eyJqdGkiOiIxIiwiaWF0IjoxNDk3NjkxNjMwLCJzdWIiOiJ7XCJ1c2VyXCI6XCIxMjNcIn0iLCJleHAiOjE0OTc5MDc2MzB9.03LUYFuRf4eWLQUHeR6F8wIkk6M_2tyZLEAZaTeJHt0"
        },
        authInfo: {
            token: "eyJhbGciOiJIUzI1NiJ9.eyJqdGkiOiIxIiwiaWF0IjoxNDk3NjkxNjMwLCJzdWIiOiJ7XCJ1c2VyXCI6XCIxMjNcIn0iLCJleHAiOjE0OTc5MDc2MzB9.03LUYFuRf4eWLQUHeR6F8wIkk6M_2tyZLEAZaTeJHt0",
            info: {id: "12345678", nickname: "张三", header: "/static/img/green.jpeg"}
        },
        userInfo: {
            own: "",
            info: {id: "12345678", sex: 2, nickname: "张三", header: "/static/img/green.jpeg", showEmail: 1}
        },
        userList: {
            rows: [
                {id: 1, name: "张三", sex: 1, email: "123456789@qq.com", createDate: "2017-06-22 12:00", updateDate: "2017-06-22 12:00"},
                {id: 2, name: "李红", sex: 0, email: "142342332@qq.com", createDate: "2017-06-22 12:00", updateDate: "2017-06-22 12:00"},
                {id: 3, name: "王五", sex: 1, email: "423456789@qq.com", createDate: "2017-06-22 12:00", updateDate: "2017-06-22 12:00"},
            ],
            totalCount: 3
        }
    }
}
