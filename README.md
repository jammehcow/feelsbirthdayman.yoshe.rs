# feelsbirthdayman.yoshe.rs

Just a simple present reveal site for [Masayoshi](https://twitch.tv/masayoshi) - a Pepega Twitch streamer.

## Running the project

Runnning the project is easy if you have `yarn`.
If you don't have yarn, you can install it using npm using `npm i -g yarn`.

After that you should be able to start the project using `yarn start` to start the Snowpack development server at `http://localhost:8080`

## Building a release

Building is simple! Run `yarn build` for a production release. Currently this exports to `build/` (for good reason) whereas the GitHub pages website looks at `docs/`. To release, just copy the build directory into `docs/` (while keeping the `CNAME` file)

## License

Literally none, I don't care what you do here.
