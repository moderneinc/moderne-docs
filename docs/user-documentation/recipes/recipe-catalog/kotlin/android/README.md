---
description: Android OpenRewrite recipes.
---

# Android

## Composite Recipes

_Recipes that include further recipes, often including the individual recipes below._

* [Find Android WebView smells](./findandroidwebviewsmells$ktrecipe.md)
* [Find Android lifecycle / LiveData smells](./findandroidlifecyclesmells$ktrecipe.md)
* [Find Android logging smells](./findandroidloggingsmells$ktrecipe.md)
* [Find Android modernization candidates](./findandroidmodernizationcandidates$ktrecipe.md)
* [Find Android permissions / security smells](./findandroidpermissionssmells$ktrecipe.md)
* [Find Android smells](./android$ktrecipe.md)
* [Find Android storage / data-layer smells](./findandroidstoragesmells$ktrecipe.md)
* [Find Android-specific performance smells](./findandroidperformancesmells$ktrecipe.md)
* [Find deprecated Android APIs](./finddeprecatedandroidapis$ktrecipe.md)

## Recipes

* [Find `@Query` DAO methods returning a synchronous result](./findroomquerywithoutlivedataorflow$ktrecipe.md)
* [Find `Activity.runOnUiThread \{ \}` / `View.post \{ \}` calls](./findrunonuithread$ktrecipe.md)
* [Find `AlertDialog.Builder(this)` constructions](./findalertdialogbuilderconstructor$ktrecipe.md)
* [Find `AsyncTask` instantiations](./findasynctask$ktrecipe.md)
* [Find `AsyncTask.execute` / `executeOnExecutor` calls](./findasynctaskexecute$ktrecipe.md)
* [Find `BitmapFactory.decode*` calls](./findbitmapfactorydecode$ktrecipe.md)
* [Find `ContentResolver.query(...)` calls](./findcontentresolverquery$ktrecipe.md)
* [Find `Context.registerReceiver(...)` calls](./findcontextregisterreceiver$ktrecipe.md)
* [Find `Dagger*Component.builder().build()` patterns](./findmanualdaggerprovision$ktrecipe.md)
* [Find `Fragment.onActivityCreated` overrides](./findfragmentonactivitycreated$ktrecipe.md)
* [Find `Fragment.onAttach(Activity)` overrides](./findfragmentonattachactivity$ktrecipe.md)
* [Find `Fragment.setRetainInstance(true)` calls](./findfragmentsetretaininstance$ktrecipe.md)
* [Find `FragmentManager.executePendingTransactions()` calls](./findfragmentmanagerexecutependingtransactions$ktrecipe.md)
* [Find `Handler()` constructor calls without an explicit `Looper`](./findbarehandlerconstructor$ktrecipe.md)
* [Find `Handler.postDelayed(...)` calls](./findhandlerpostdelayed$ktrecipe.md)
* [Find Kotlin classes implementing `Parcelable` without `@Parcelize`](./findparcelablejavaimpl$ktrecipe.md)
* [Find Kotlin classes implementing `java.io.Serializable`](./findserializableusage$ktrecipe.md)
* [Find `LiveData.observe(this, observer)` calls inside `Fragment`](./findlifecycleobservelivedata$ktrecipe.md)
* [Find `LocalBroadcastManager.getInstance(...)` usage](./findlocalbroadcastmanager$ktrecipe.md)
* [Find `MODE_WORLD_READABLE` / `MODE_WORLD_WRITEABLE` references](./findmodeworldreadable$ktrecipe.md)
* [Find `MutableLiveData` allocations](./findmutablelivedataallocation$ktrecipe.md)
* [Find `MutableLiveData.postValue(...)` calls inside coroutine main-thread contexts](./findlivedatapostvaluefrommain$ktrecipe.md)
* [Find `ObjectAnimator.ofInt/ofFloat(...)` calls](./findobjectanimator$ktrecipe.md)
* [Find `PreferenceManager.getDefaultSharedPreferences(...)` calls](./findpreferencemanagergetdefaultsharedpreferences$ktrecipe.md)
* [Find `Realm.getDefaultInstance()` calls](./findrealmusage$ktrecipe.md)
* [Find `Runtime.exec(...)` / `ProcessBuilder.start()` calls](./findruntimeexecinandroid$ktrecipe.md)
* [Find `SharedPreferences.Editor.commit()` calls](./findsharedpreferencescommit$ktrecipe.md)
* [Find `System.out.println(...)` calls](./findsystemoutinandroid$ktrecipe.md)
* [Find `Thread \{ \}.start()` calls inside `Activity` / `Fragment`](./findmanualthreadinginactivity$ktrecipe.md)
* [Find `Vibrator.vibrate(long)` (one-arg) calls](./findvibratorvibratelong$ktrecipe.md)
* [Find `ViewModelProvider(...)` direct constructions](./findandroidviewmodelinjection$ktrecipe.md)
* [Find `WebSettings.setJavaScriptEnabled(true)` calls](./findwebviewjavascriptenabled$ktrecipe.md)
* [Find `WebView.loadUrl(...)` calls](./findwebviewloadurl$ktrecipe.md)
* [Find `android.preference.PreferenceManager` imports](./findpreferencemanagerimport$ktrecipe.md)
* [Find `android.util.Log.v/d/i/w/e(...)` calls](./findandroidlogusage$ktrecipe.md)
* [Find deprecated `Context.getColor`/`getDrawable`/`getColorStateList` calls](./finddeprecatedresourcegetters$ktrecipe.md)
* [Find direct `requestPermissions(...)` calls](./findrequestpermissions$ktrecipe.md)
* [Find `findViewById` call sites](./findfindviewbyid$ktrecipe.md)
* [Find `findViewById` inside `onDraw` / `onMeasure` / `onLayout`](./findfindviewbyidinhotpath$ktrecipe.md)
* [Find `io.reactivex.*` imports](./findrxjavaimports$ktrecipe.md)
* [Find `kotlinx.android.parcel` imports](./finddeprecatedparcelizeimport$ktrecipe.md)
* [Find `kotlinx.android.synthetic.*` imports](./findkotlinandroidsyntheticimports$ktrecipe.md)
* [Find legacy `Intent.ACTION_PICK` / `ACTION_GET_CONTENT` references](./findintentactiongetcontent$ktrecipe.md)
* [Find `onActivityResult` overrides](./findonactivityresultoverride$ktrecipe.md)
* [Find `onRequestPermissionsResult` overrides](./findonrequestpermissionsresultoverride$ktrecipe.md)
* [Find public `MutableLiveData` properties](./findpublicmutablelivedataproperty$ktrecipe.md)
* [Find `resources.getColor(...)` (one-arg) calls](./findresourcesgetcolor$ktrecipe.md)
* [Find `resources.getDrawable(...)` (one-arg) calls](./findresourcesgetdrawable$ktrecipe.md)
* [Find `sharedPrefs.edit()` calls](./findsharedpreferencesedit$ktrecipe.md)
* [Find `startActivityForResult` calls](./findstartactivityforresult$ktrecipe.md)
* [Find `startService(...)` calls](./findstartservice$ktrecipe.md)


