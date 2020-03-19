pub use std::{concat, stringify};

/// This macro is make the next macro call use a structured format instead of a
/// format string followed by its matching values.
///
/// Thus instead of writting:
///
/// ```ignored
///   println!("{{ \"name\" = {:?} }}", value);
/// ```
///
/// The structured macro allow to write it as follow:
///
/// ```ignored
///   structured!(println!{
///     name : "{:?}" = value,
///   });
/// ```
#[macro_export(local_inner_macros)]
macro_rules! structured {
    ($macro:ident !{ $key:ident : $pat:literal = $val:expr }) => {
        $macro!(
            $crate::concat!(
                "{{ ",
                "\"", $crate::stringify!($key), "\": ", $pat,
                " }}"),
            $val
        )
    };
    ($macro:ident !{ $key0:ident : $pat0:literal = $val0:expr,
                     $($key:ident : $pat:literal = $val:expr),* }) => {
        $macro!(
            $crate::concat!(
                "{{ ",
                "\"", $crate::stringify!($key0), "\": ", $pat0,
                $(", \"", $crate::stringify!($key), "\": ", $pat),*,
                " }}"),
            $val0, $($val),*
        )
    };
    ($macro:ident !{ $($key:ident : $pat:literal = $val:expr,)* }) => {
        structured!($macro !{ $($key : $pat = $val),* })
    }
}

#[cfg(test)]
mod tests {
    use std::format;

    #[test]
    fn single_entry() {
        assert_eq!(
            structured!(format! { b : "{:?}" = "2" }),
            "{ \"b\": \"2\" }"
        );
    }

    #[test]
    fn multiple_entry_sep_comma() {
        assert_eq!(
            structured!(format! {
                c : "{}" = 1,
                d : "{:?}" = "2"
            }),
            "{ \"c\": 1, \"d\": \"2\" }"
        );
    }

    #[test]
    fn multiple_entry_end_comma() {
        assert_eq!(
            structured!(format! {
                c : "{}" = 1,
                d : "{:?}" = "2",
            }),
            "{ \"c\": 1, \"d\": \"2\" }"
        );
    }
}
