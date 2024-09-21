class Wheel {
  constructor(center, radius, colors) {
    this.center = center;
    this.radius = radius;
    this.colors = colors;
  }
  draw(ctx, angle = Math.PI) {
    let sliceCount = this.colors.length;
    for (let i = 0; i < sliceCount; i++) {
      const startAngle = angle + Math.PI * 2 * (i / sliceCount);
      const endAngle = angle + Math.PI * 2 * ((i + 1) / sliceCount);
      ctx.beginPath();
      ctx.moveTo(this.center.x, this.center.y);
      ctx.arc(this.center.x, this.center.y, this.radius, startAngle, endAngle);
      ctx.fillStyle = this.colors[i];
      ctx.fill();
    }
  }
}
