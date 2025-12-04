class Card {
  constructor(title, description, imageUrl) {
    this.title = title;
    this.description = description;
    this.imageUrl = imageUrl;
  }

  render() {
    return `
            <div class="card">
                <img src="${this.imageUrl}" alt="${this.title}" class="card-image">
                <div class="card-content">
                    <h2 class="card-title">${this.title}</h2>
                    <p class="card-description">${this.description}</p>
                </div>
            </div>
        `;
  }
}

export default Card;
