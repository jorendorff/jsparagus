//! The result of emitter

use crate::frame_slot::FrameSlot;
use crate::gcthings::GCThing;
use crate::regexp::RegExpItem;
use crate::scope_notes::ScopeNote;

// WARNING
// The following section is generated by update_stencil.py.
// Do mot modify manually.
//
// @@@@ BEGIN TYPES @@@@
#[derive(Debug, Clone, Copy)]
pub enum ImmutableScriptFlagsEnum {
    #[allow(dead_code)]
    IsForEval = 1 << 0,
    #[allow(dead_code)]
    IsModule = 1 << 1,
    #[allow(dead_code)]
    IsFunction = 1 << 2,
    #[allow(dead_code)]
    SelfHosted = 1 << 3,
    #[allow(dead_code)]
    ForceStrict = 1 << 4,
    #[allow(dead_code)]
    HasNonSyntacticScope = 1 << 5,
    #[allow(dead_code)]
    NoScriptRval = 1 << 6,
    #[allow(dead_code)]
    TreatAsRunOnce = 1 << 7,
    #[allow(dead_code)]
    Strict = 1 << 8,
    #[allow(dead_code)]
    HasModuleGoal = 1 << 9,
    #[allow(dead_code)]
    HasInnerFunctions = 1 << 10,
    #[allow(dead_code)]
    HasDirectEval = 1 << 11,
    #[allow(dead_code)]
    BindingsAccessedDynamically = 1 << 12,
    #[allow(dead_code)]
    HasCallSiteObj = 1 << 13,
    #[allow(dead_code)]
    IsAsync = 1 << 14,
    #[allow(dead_code)]
    IsGenerator = 1 << 15,
    #[allow(dead_code)]
    FunHasExtensibleScope = 1 << 16,
    #[allow(dead_code)]
    FunctionHasThisBinding = 1 << 17,
    #[allow(dead_code)]
    NeedsHomeObject = 1 << 18,
    #[allow(dead_code)]
    IsDerivedClassConstructor = 1 << 19,
    #[allow(dead_code)]
    IsFieldInitializer = 1 << 20,
    #[allow(dead_code)]
    HasRest = 1 << 21,
    #[allow(dead_code)]
    NeedsFunctionEnvironmentObjects = 1 << 22,
    #[allow(dead_code)]
    FunctionHasExtraBodyVarScope = 1 << 23,
    #[allow(dead_code)]
    ShouldDeclareArguments = 1 << 24,
    #[allow(dead_code)]
    ArgumentsHasVarBinding = 1 << 25,
    #[allow(dead_code)]
    AlwaysNeedsArgsObj = 1 << 26,
    #[allow(dead_code)]
    HasMappedArgsObj = 1 << 27,
    #[allow(dead_code)]
    IsLikelyConstructorWrapper = 1 << 28,
}

#[derive(Debug, Clone, Copy)]
pub enum MutableScriptFlagsEnum {
    #[allow(dead_code)]
    HasRunOnce = 1 << 8,
    #[allow(dead_code)]
    HasBeenCloned = 1 << 9,
    #[allow(dead_code)]
    HasScriptCounts = 1 << 10,
    #[allow(dead_code)]
    HasDebugScript = 1 << 11,
    #[allow(dead_code)]
    NeedsArgsAnalysis = 1 << 12,
    #[allow(dead_code)]
    NeedsArgsObj = 1 << 13,
    #[allow(dead_code)]
    AllowRelazify = 1 << 14,
    #[allow(dead_code)]
    SpewEnabled = 1 << 15,
    #[allow(dead_code)]
    BaselineDisabled = 1 << 16,
    #[allow(dead_code)]
    IonDisabled = 1 << 17,
    #[allow(dead_code)]
    FailedBoundsCheck = 1 << 18,
    #[allow(dead_code)]
    FailedShapeGuard = 1 << 19,
    #[allow(dead_code)]
    HadFrequentBailouts = 1 << 20,
    #[allow(dead_code)]
    HadOverflowBailout = 1 << 21,
    #[allow(dead_code)]
    Uninlineable = 1 << 22,
    #[allow(dead_code)]
    InvalidatedIdempotentCache = 1 << 23,
    #[allow(dead_code)]
    FailedLexicalCheck = 1 << 24,
}

// @@@@ END TYPES @@@@

#[derive(Debug)]
pub struct ImmutableScriptFlags {
    value: u32,
}

impl ImmutableScriptFlags {
    pub fn new() -> Self {
        Self { value: 0 }
    }

    pub fn from_raw(bits: u32) -> Self {
        Self { value: bits }
    }

    pub fn set(&mut self, bit: ImmutableScriptFlagsEnum) {
        self.value |= bit as u32;
    }

    pub fn has(&self, bit: ImmutableScriptFlagsEnum) -> bool {
        (self.value & bit as u32) != 0
    }

    pub fn reset(&mut self, bit: ImmutableScriptFlagsEnum) {
        self.value &= !(bit as u32)
    }
}

impl From<ImmutableScriptFlags> for u32 {
    fn from(flags: ImmutableScriptFlags) -> u32 {
        flags.value
    }
}

/// Data that is shared across the following:
///   * top level script
///   * non-lazy function script
///   * lazy function script
///
/// Top level script and non-lazy function script use ScriptStencil,
/// instead of ScriptStencilBase.
#[derive(Debug)]
pub struct ScriptStencilBase {
    pub immutable_flags: ImmutableScriptFlags,

    /// For top level script and non-lazy function script,
    /// this is a list of GC things referred by bytecode and scope.
    ///
    /// For lazy function script, this is a list of inner functions and
    /// closed over bindings.
    pub gcthings: Vec<GCThing>,
}

impl ScriptStencilBase {
    pub fn lazy_function(is_generator: bool, is_async: bool) -> Self {
        let mut flags = ImmutableScriptFlagsEnum::IsFunction as u32;
        if is_generator {
            flags |= ImmutableScriptFlagsEnum::IsGenerator as u32;
        }
        if is_async {
            flags |= ImmutableScriptFlagsEnum::IsAsync as u32;
        }
        Self {
            immutable_flags: ImmutableScriptFlags::from_raw(flags),
            gcthings: Vec::new(),
        }
    }

    pub fn set_has_rest(&mut self) {
        self.immutable_flags.set(ImmutableScriptFlagsEnum::HasRest);
    }
}

/// Data used to instantiate the non-lazy script.
/// Maps to js::frontend::ScriptStencil in m-c/js/src/frontend/Stencil.h.
#[derive(Debug)]
pub struct ScriptStencil {
    pub base: ScriptStencilBase,

    pub bytecode: Vec<u8>,
    pub regexps: Vec<RegExpItem>,
    pub scope_notes: Vec<ScopeNote>,

    /// Line and column numbers for the first character of source.
    pub lineno: usize,
    pub column: usize,

    pub main_offset: usize,
    pub max_fixed_slots: FrameSlot,
    pub maximum_stack_depth: u32,
    pub body_scope_index: u32,
    pub num_ic_entries: u32,
    pub num_type_sets: u32,
}

/// Index into ScriptStencilList.scripts.
#[derive(Debug, Clone, Copy)]
pub struct ScriptStencilIndex {
    index: usize,
}

impl ScriptStencilIndex {
    fn new(index: usize) -> Self {
        Self { index }
    }
}

impl From<ScriptStencilIndex> for usize {
    fn from(index: ScriptStencilIndex) -> usize {
        index.index
    }
}

/// List of stencil scripts.
#[derive(Debug)]
pub struct ScriptStencilList {
    /// Uses Option to allow `allocate()` and `populate()` to be called
    /// separately.
    scripts: Vec<Option<ScriptStencil>>,
}

impl ScriptStencilList {
    pub fn new() -> Self {
        Self {
            scripts: Vec::new(),
        }
    }

    pub fn push(&mut self, script: ScriptStencil) -> ScriptStencilIndex {
        let index = self.scripts.len();
        self.scripts.push(Some(script));
        ScriptStencilIndex::new(index)
    }

    pub fn allocate(&mut self) -> ScriptStencilIndex {
        let index = self.scripts.len();
        self.scripts.push(None);
        ScriptStencilIndex::new(index)
    }

    pub fn populate(&mut self, index: ScriptStencilIndex, script: ScriptStencil) {
        self.scripts[usize::from(index)].replace(script);
    }
}

impl From<ScriptStencilList> for Vec<ScriptStencil> {
    fn from(list: ScriptStencilList) -> Vec<ScriptStencil> {
        list.scripts
            .into_iter()
            .map(|g| g.expect("Should be populated"))
            .collect()
    }
}
