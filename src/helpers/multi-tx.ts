export async function getCurrentNonce(cacheManager, group_tx_id) {
  if (group_tx_id) {
    const val: string = await cacheManager.get(group_tx_id);
    let res: number;
    if(val) {
      res = Number(val) + 1;
    } else {
      res = 0
    }
    await cacheManager.set(group_tx_id, String(res));
    return res;
  } else {
    return 0;
  }
}