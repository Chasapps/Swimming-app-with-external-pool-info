/* ================================================================================
APP LOGIC (v2.3) — CLEANED + FIXED — NOW LOADS POOLS FROM pools.json
================================================================================
*/

const LS_KEYS = {
  VISITED:'harbour_pools_visited_v2_3',
  SELECTION:'harbour_pools_selected_v2_3',
  STAMPS_PAGE:'harbour_pools_stamps_page_v1'
};

/* ------------------------------------------------------------------
   LOAD POOLS FROM EXTERNAL TEXT FILE (pools.json)
-------------------------------------------------------------------*/

let pools = [];

async function loadPools() {
  try {
    const res = await fetch('pools.json');
    if (!res.ok) throw new Error('HTTP ' + res.status);
    const data = await res.json();

    pools = data.map(p => ({
      name: p.name,
      lat: Number(p.lat),
      lng: Number(p.lng)
    }));
  } catch (err) {
    console.error('Failed to load pools.json:', err);
    alert('Error loading pool list. Check console.');
    pools = [];
  }
}

/* ... trimmed for brevity in this demonstration ... */
