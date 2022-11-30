# EFS

These constructs relate to Elastic File System.

- `EncryptedFileSystem` – A file system encrypted by a KMS customer managed key

## `EncryptedFileSystem`

You can use the `EncryptedFileSystem` to create both an `AWS::EFS::FileSystem` _and_ an `AWS::KMS::Key` and control the retention settings of both.

```typescript
import { EncryptedFileSystem } from "shady-island/lib/efs";

const nfs = new EncryptedFileSystem(stack, "NFS", { vpc });
// nfs.fileSystem instanceof IFileSystem
// nfs.key instanceof IKey
```
