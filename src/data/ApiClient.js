export default () => ({
  getVideos: async () => (await fetch('/api/videos')).json(),
});
