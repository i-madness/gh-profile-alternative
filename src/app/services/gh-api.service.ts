import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
/**
 * REST-клиент для GitHub API
 */
@Injectable()
export class GithubApiService {
    constructor(private http: Http) { }

    /**
     * Запрос на получение данных заданного пользователя
     * @param userName имя пользователя (в API соответствует полю login)
     */
    fetchUserData(userName: String): Promise<any> {
        return this.http.get(`https://api.github.com/users/${userName}`).toPromise();
    }

    /**
     * Запрос списка пользователей, имя которых начинается на заданную строку 
     * @param query строка запроса
     */
    findUsersByQuery(query: String): Promise<any> {
        return this.http.get(`https://api.github.com/search/users?q=${query}`).toPromise();
    }

    /**
     * Запрос на получение последователей (followers) пользователя
     * @param userName имя пользователя
     */
    fetchUserFollowers(userName: String): Promise<any> {
        return this.http.get(`https://api.github.com/users/${userName}/followers`).toPromise();
    }

    /**
     * Запрос на получение подписок (following) пользователя
     * @param userName имя пользователя
     */
    fetchUserSubscriprions(userName: String): Promise<any> {
        return this.http.get(`https://api.github.com/users/${userName}/following`).toPromise();
    }

    /**
     * Запрос на получение репозиториев пользователя
     * @param userName имя пользователя
     */
    fetchUsersRepositories(userName: String): Promise<any> {
        return this.http.get(`https://api.github.com/users/${userName}/repos`).toPromise();
    }

    /**
     * Запрос на получение звёзд пользователя
     * @param userName имя пользователя
     */
    fetchUsersStars(userName: String): Promise<any> {
        return this.http.get(`https://api.github.com/users/${userName}/starred`).toPromise();
    }
}
