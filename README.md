[![Rust][Rust Badge]][Rust CI Link]
[![NotImplemented Counter][NotImplemented Badge]][NotImplemented Search]
[![Fuzzbug days since][Fuzzbug Days Badge]][Fuzzbugs]
[![Fuzzbug open][Fuzzbug Open Badge]][Open Fuzzbugs]


# jsparagus - A JavaScript parser written in Rust

jsparagus is intended to replace the JavaScript parser in Firefox.

Current status:

*   jsparagus is not on crates.io yet. The AST design is not stable
    enough.  We do have a build of the JS shell that includes jsparagus
    as an option (falling back on C++ for features jsparagus doesn't
    support). See
    [mozilla-spidermonkey/rust-frontend](https://github.com/mozilla-spidermonkey/rust-frontend).

*   It can parse a lot of JS scripts, and will eventually be able to parse everything.
    See the current limitations below, or our GitHub issues.

*   Our immediate goal is to [support parsing everything in Mozilla's JS
    test suite and the features in test262 that Firefox already
    supports](https://github.com/mozilla-spidermonkey/jsparagus/milestone/1).

Join us on Discord: https://discord.gg/tUFFk9Y


## Getting started

```sh
make init
make all
```

(**Note:** This takes about 3 minutes to run on my laptop. Part of
jsparagus is generated by a Python script, and the script is pretty
slow. We're working on it!)

When it's done, you can:

*   Run `make check` to make sure things are working.

*   `cd crates/driver && cargo run` to test the JS parser and bytecode emitter.

## Benchmarking

### Fine-grain Benchmarks

Fine-grain benchmarks are used to detect regression by focusing on each part of
the parser at one time, exercising only this one part. The benchmarks are not
meant to represent any real code sample, but to focus on executing specific
functions of the parser.

To run this parser, you should execute the following command at the root of the
repository:

```sh
cd crates/parser
cargo bench
```

### Real-world JavaScript

Real world benchmarks are used to track the overall evolution of performance over
time. The benchmarks are meant to represent realistic production use cases.

To benchmark the AST generation, we use SpiderMonkey integration to execute the
parser and compare it against SpiderMonkey's default parser. Therefore, to run
this benchmark, we have to first compile SpiderMonkey, then execute SpiderMonkey
shell on the benchmark. (The following instructions assume that `~` is the
directory where all projects are checked out)

* Generate Parse Tables:

  ```sh
  cd ~/jsparagus/
  make init
  make all
  ```

* Compile an optimized version of [SpiderMonkey's JavaScript shell](https://github.com/mozilla/gecko-dev):

  ```sh
  cd ~/mozilla/js/src/
  # set the jsparagus' path to the abosulte path to ~/jsparagus.
  $EDITOR frontend/smoosh/Cargo.toml
  ../../mach vendor rust
  # Create a build directory
  mkdir obj.opt
  cd obj.opt
  # Build SpiderMonkey
  ../configure --enable-nspr-build --enable-smoosh --enable-debug-symbols=-ggdb3 --disable-debug --enable-optimize --enable-release --disable-tests
  make
  ```

* Execute the [real-js-samples](https://github.com/nbp/real-js-samples/) benchmark:

  ```sh
  cd ~/real-js-samples/
  ~/mozilla/js/src/obj.opt/dist/bin/js ./20190416.js
  ```

This should return the overall time taken to parse all the Script once, in the
cases where there is no error. The goal is to minimize the number of
nano-seconds per bytes.

## Limitations

It's *all* limitations, but I'll try to list the ones that are relevant
to parsing JS.

*   Lookahead assertions are limited to one token. (The JS grammar
    contains an occasional
    ``[lookahead != `let [`]``
    and even
    ``[lookahead != `async [no LineTerminator here] function`]``.)

*   Error messages are poor.

*   No table compaction or table optimization. There's plenty of
    low-hanging fruit there.


[Rust Badge]: https://github.com/mozilla-spidermonkey/jsparagus/workflows/Rust/badge.svg
[Rust CI Link]: https://github.com/mozilla-spidermonkey/jsparagus/actions?query=branch%3Amaster
[NotImplemented Badge]: https://img.shields.io/endpoint?url=https%3A%2F%2Fraw.githubusercontent.com%2Fmozilla-spidermonkey%2Fjsparagus%2Fci_results%2F.metrics%2Fbadges%2Fnot-implemented.json
[NotImplemented Search]: https://github.com/mozilla-spidermonkey/jsparagus/search?q=notimplemented&unscoped_q=notimplemented
[Fuzzbug days Badge]: https://img.shields.io/endpoint?url=https%3A%2F%2Fraw.githubusercontent.com%2Fmozilla-spidermonkey%2Fjsparagus%2Fci_results%2F.metrics%2Fbadges%2Fsince-last-fuzzbug.json
[Fuzzbug Open Badge]: https://img.shields.io/endpoint?url=https%3A%2F%2Fraw.githubusercontent.com%2Fmozilla-spidermonkey%2Fjsparagus%2Fci_results%2F.metrics%2Fbadges%2Fopen-fuzzbug.json
[Fuzzbugs]: https://github.com/mozilla-spidermonkey/jsparagus/issues?utf8=%E2%9C%93&q=label%3AlibFuzzer+
[Open Fuzzbugs]: https://github.com/mozilla-spidermonkey/jsparagus/labels/libFuzzer
