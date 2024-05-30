import axios from "axios"
import { Todo } from "../types/todo"

const BASE_URL = "http://localhost:8080"
const axiosIntstance = axios.create({baseURL: BASE_URL})

export const getTodosIds = async() => {
    return (await axiosIntstance.get<Todo[]>('todos')).data.map((todo) => todo.id)
}