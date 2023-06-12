export function getTitle() {
	return localStorage.getItem('title')
}

export function setTitle(value) {
	return localStorage.setItem('title', value)
}