module.exports = {
  '{src,}/**/*.{ts,js,json,md,scss,css,html}': (filenames) => {
    const commands = [];
    filenames.forEach((filename) => {
      commands.push(`prettier --write ${filename}`);
      commands.push(`git add ${filename}`);
    });
    return filenames;
  },
};
