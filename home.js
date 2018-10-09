function setHome(owner, large, address) {
    localStorage.setItem('owner', owner)
    localStorage.setItem('large', large)
    localStorage.setItem('address', address)
}

setHome('Ridoan Saleh Nasution', '10m x 30m', 'Menteng Atas, Jakarta Selatan')