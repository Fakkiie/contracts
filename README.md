# contracts

This repository serves as a minimal Hardhat project for testing the `@testbeacon/core` and `hardhat-testbeacon` packages.

It includes basic Solidity contracts and is configured to auto-generate test cases via the testbeacon plugin.

## Install Dependencies
```
npm install
```

## Run Tests

```
npx hardhat test
```

This will generate and run test cases based on your contract ABI (if `mint()` is present).

## Local Development with `testbeacon`

To use local versions of the packages:
# Link @testbeacon/core from its folder
```
cd ../testbeacon-core
npm link
```
# Link hardhat-testbeacon and connect to core
```
cd ../hardhat-testbeacon
npm link
npm link @testbeacon/core
```
# Use them in your contracts repo
```
cd ../contracts
npm link hardhat-testbeacon
```
## File Structure

contracts/
├── contracts/             # Solidity files
├── test/                  # Auto-generated test files
├── hardhat.config.ts      # Hardhat config with testbeacon plugin
└── package.json
```

---

## License

This project is licensed under the MIT License - see the [LICENSE](./LICENSE) file for details.
