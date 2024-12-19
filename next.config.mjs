import path from 'path';

export default {
  webpack(config) {
    // Resolve the '@' alias to 'src' directory
    config.resolve.alias['@'] = path.resolve('src');
    return config;
  },
};
