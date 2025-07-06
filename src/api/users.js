import { API_BASE_URL } from "~/constants/api"

export const registerUser = async (formData) => {
    const token = await getRegistrationToken()

    const url = `${API_BASE_URL}/users`

    const res = await fetch(url, {
        method: "POST", body: formData,
        headers: {
            'Token': token,
            'Accept': 'application/json'
        }
    })

    if (res.ok) return true
    else return false
}

export const getUsers = async (page, count = 6) => {
    const url = `${API_BASE_URL}/users?page=${page}&count=${count}`

    const res = await fetch(url, {
        method: "GET", searchParams: {
            page, count
        }
    })

    if (res.status !== 200) throw Error(res.statusText)

    const data = await res.json()

    if (!data.success) throw Error(data.message)

    return { usersToDisplay: data.users, loadMorePossible: data.links.next_url ? true : false }
}

export const getRegistrationToken = async () => {
    const url = `${API_BASE_URL}/token`

    const res = await fetch(url, {
        method: "POST"
    })

    if (res.status !== 200) throw Error(res.statusText)

    const data = await res.json()

    if (!data.success) throw Error(data.message)

    return data.token
}