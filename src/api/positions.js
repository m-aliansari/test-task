import { API_BASE_URL } from "~/constants/api"

export const getAllPositions = async () => {
    const url = `${API_BASE_URL}/positions`

    const res = await fetch(url, {
        method: "GET",
    })

    if (res.status !== 200) throw Error(res.statusText)

    const data = await res.json()

    if (!data.success) throw Error(data.message)

    return data.positions
}