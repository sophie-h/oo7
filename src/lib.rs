#![deny(rustdoc::broken_intra_doc_links)]
#![doc = include_str!("../README.md")]
#![cfg_attr(feature = "docs", feature(doc_auto_cfg))]

mod error;
mod key;
mod migration;

#[cfg(feature = "unstable")]
pub use key::Key;
#[cfg(not(feature = "unstable"))]
pub(crate) use key::Key;

mod crypto;
pub mod dbus;
pub mod portal;

mod keyring;
mod utils;

pub use error::{Error, Result};
pub use keyring::{Item, Keyring};
pub use migration::migrate;

/// Checks whether the application is sandboxed or not.
pub async fn is_sandboxed() -> bool {
    crate::utils::is_flatpak().await || crate::utils::is_snap().await
}
